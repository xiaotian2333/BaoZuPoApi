// 编程式入口：扫描 module/ 目录生成扁平 API 函数，可直接以库方式调用
// 用法：
//   const api = require('./main')
//   const res = await api.client_device_info({ sn: 'xxx' })
//   const res2 = await api.remote_read_meter({ sn: 'xxx', isPay: false })
// 认证覆盖：传顶层字段或 auth 对象，如 api.xxx({ sn, csrfToken: '...', userid: '...' })
const fs = require('node:fs')
const path = require('node:path')
const { createCloudRequest } = require('./util/request')

// 认证覆盖字段（同 server.js 的规则）
const AUTH_KEYS = ['csrfToken', 'userid', 'token', 'mappId', 'roleId']

// 从调用参数中剥离认证覆盖字段（不混入业务数据）
function extractAuth(data) {
  const auth = {}
  for (const key of AUTH_KEYS) {
    if (data[key] != null) {
      auth[key] = data[key]
      delete data[key]
    }
  }
  if (data.auth && typeof data.auth === 'object') {
    Object.assign(auth, data.auth)
    delete data.auth
  }
  return auth
}

const api = {}

fs.readdirSync(path.join(__dirname, 'module'))
  .reverse()
  .forEach((file) => {
    // 跳过非 js 文件与内部模块（_ 前缀）
    if (!file.endsWith('.js') || file.startsWith('_')) return
    const fileModule = require(path.join(__dirname, 'module', file))
    const fn = file.split('.').shift()
    // 包装：自动剥离认证字段，调用模块并注入请求工厂
    api[fn] = (data = {}) => {
      const params = { ...data }
      const auth = extractAuth(params)
      return fileModule(params, (config) => createCloudRequest({ ...config, auth }))
    }
  })

// 整合导出：HTTP 服务管理 + 请求工具 + 所有 API 函数
module.exports = { ...require('./server'), ...require('./util/request'), ...api }