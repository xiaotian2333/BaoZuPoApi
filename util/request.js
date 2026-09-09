// 云平台请求封装：自动完成签名加密与响应解密，模块代码零感知
// 返回统一结构 { headers, status, body }，body 为解密后的明文对象
const axios = require('axios')
const config = require('../config')
const { getSignKey, encryptData, decryptData } = require('./crypto')

// 保留响应原始 headers（小写键名），安全性头过滤掉
function pickHeaders(headers) {
  const censor = ['set-cookie']
  const out = {}
  if (!headers) return out
  for (const [k, v] of Object.entries(headers)) {
    if (!censor.includes(k.toLowerCase())) out[k] = v
  }
  return out
}

// 格式化网络/未知错误，使其与模块错误一致：{ status, body, headers }
function wrapError(err) {
  if (err && err.status && err.body) return err
  return {
    status: 0,
    headers: {},
    body: { code: 0, data: null, msg: err && err.message ? err.message : String(err) },
  }
}

/**
 * 发起一次云平台请求
 * @param {Object} options 请求配置
 * @param {string} options.url 接口路径（如 /v1/client/client_device_info/）
 * @param {string} [options.method='POST'] HTTP 方法
 * @param {Object} [options.data] 业务参数（将被 JSON 序列化后加密进 ciphertext）
 * @param {Object} [options.headers] 追加的请求头
 * @param {Object} [options.auth] 认证覆盖：{ csrfToken, userid, token, mappId, roleId }
 * @param {boolean} [options.noEncrypt] 请求体不做加密（云平台白名单接口）
 */
async function createCloudRequest(options = {}) {
  const { url, method = 'POST', data, headers: extraHeaders, noEncrypt } = options
  const auth = { ...config.auth, ...(options.auth || {}) }
  const baseUrl = options.baseUrl || config.baseUrl

  // 每次请求生成新的时间戳与传输密钥
  const timestamp = Math.floor(Date.now() / 1000)
  const signKey = getSignKey(timestamp, auth.csrfToken, auth.userid)

  const reqHeaders = {
    'X-CSRFToken': auth.csrfToken || '',
    Cookie: `csrftoken=${auth.csrfToken || ''}`,
    userid: auth.userid || '',
    'mapp-id': String(auth.mappId ?? '0'),
    'role-id': String(auth.roleId ?? '0'),
    'X-Token': auth.token || '',
    'x-timestamp': String(timestamp),
    'Content-Type': 'application/json',
    ...extraHeaders,
  }

  // 请求体：默认把业务参数加密进 ciphertext；白名单接口/无数据时直接明文
  let body = data != null && !noEncrypt ? { ciphertext: encryptData(signKey, JSON.stringify(data)) } : data

  let resp
  try {
    const methodUpper = String(method).toUpperCase()
    resp = await axios({
      baseURL: baseUrl,
      url,
      method: methodUpper,
      // 云平台 GET 接口参数走 query（与小程序 $u.get 一致），写操作才走加密 body
      ...(methodUpper === 'GET' ? { params: data } : { data: body }),
      headers: reqHeaders,
      validateStatus: () => true, // 统一处理：不抛非 2xx，由调用方决定
      timeout: 15000,
    })
  } catch (e) {
    throw wrapError(e)
  }

  // 解析响应体（可能是 JSON 字符串）
  let payload = resp.data
  if (typeof resp.data === 'string') {
    try {
      payload = JSON.parse(resp.data)
    } catch (e) {
      payload = { code: 0, data: null, msg: resp.data }
    }
  }

  // 响应含 ciphertext 则解密，并把明文替换回 data
  if (payload && payload.data && typeof payload.data.ciphertext === 'string') {
    try {
      const plain = decryptData(signKey, payload.data.ciphertext)
      payload.data = JSON.parse(plain)
    } catch (e) {
      return { headers: pickHeaders(resp.headers), status: resp.status, body: { code: 0, data: null, msg: `响应解密失败: ${e.message}` } }
    }
  }

  return { headers: pickHeaders(resp.headers), status: resp.status, body: payload }
}

module.exports = { createCloudRequest }