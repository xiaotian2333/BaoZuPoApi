// 模型式加载 HTTP 服务：扫描 module/ 目录自动注册路由（参考 KuGouMusicApi 的 server.js）
const fs = require('node:fs')
const path = require('node:path')
const express = require('express')
const config = require('./config')
const { createCloudRequest } = require('./util/request')

/**
 * 动态扫描 module 目录，获取所有 API 模块定义
 * 规则：
 *  - 以 _ 开头的文件视为内部/私有模块，跳过注册
 *  - 默认路由 = 文件名去 .js 后下划线转斜杠（client_device_info.js → /client/device/info）
 *  - specificRoute 可覆盖单个文件的路由
 * @param {string} modulesPath 模块目录绝对路径
 * @param {Object} specificRoute 文件名 → 路由 自定义映射
 * @returns {Promise<Array>} [{ identifier, route, module }]
 */
async function getModulesDefinitions(modulesPath, specificRoute = {}) {
  const files = await fs.promises.readdir(modulesPath)
  const parseRoute = (fileName) =>
    specificRoute && fileName in specificRoute ? specificRoute[fileName] : `/${fileName.replace(/\.(js)$/i, '').replace(/_/g, '/')}`
  return (
    files
      .reverse()
      .filter((fileName) => fileName.endsWith('.js') && !fileName.startsWith('_'))
      .map((fileName) => ({
        identifier: fileName.split('.').shift(),
        route: parseRoute(fileName),
        module: require(path.resolve(modulesPath, fileName)),
      }))
  )
}

// 从参数中剥离认证覆盖字段（不混入业务数据）
const AUTH_KEYS = ['csrfToken', 'userid', 'token', 'mappId', 'roleId']
function extractAuth(params) {
  const auth = {}
  for (const key of AUTH_KEYS) {
    if (params[key] != null) {
      auth[key == 'token' ? 'token' : key] = params[key]
      // token 键名本身在 AUTH_KEYS 里就是 token，无需映射
      delete params[key]
    }
  }
  if (params.auth && typeof params.auth === 'object') {
    Object.assign(auth, params.auth)
    delete params.auth
  }
  return auth
}

/**
 * 构建并配置 Express 应用
 * @param {Array} [moduleDefs] 模块定义数组，缺省自动扫描 module/ 目录
 * @returns {Promise<import('express').Express>}
 */
async function consturctServer(moduleDefs) {
  const app = express()

  // 简化 CORS：允许跨域与 JSON 响应
  app.use((req, res, next) => {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'Authorization,Content-Type,X-Requested-With',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    })
    if (req.method === 'OPTIONS') {
      res.status(204).end()
      return
    }
    next()
  })

  app.use(express.json({ limit: '2mb' }))
  app.use(express.urlencoded({ extended: false }))

  // 根路径输出模块清单，便于确认可插拔注册结果
  app.get('/', async (_req, res) => {
    const defs = moduleDefs || (await getModulesDefinitions(path.join(__dirname, 'module'), config.specificRoute))
    res.send({
      code: 200,
      data: defs.map((d) => ({ name: d.identifier, route: d.route, method: 'GET/POST' })),
      msg: 'BaoZuPoApi 模块清单',
    })
  })

  const moduleDefinitions = moduleDefs || (await getModulesDefinitions(path.join(__dirname, 'module'), config.specificRoute))

  // 动态注册路由（模型式加载）
  for (const moduleDef of moduleDefinitions) {
    app.use(moduleDef.route, async (req, res) => {
      // 合并 query + body 参数
      const params = { ...req.query, ...(req.body && typeof req.body === 'object' ? req.body : { data: req.body }) }
      // 剥离认证覆盖字段 → 请求级 auth
      const auth = extractAuth(params)

      try {
        const moduleResponse = await moduleDef.module(params, (opts) => createCloudRequest({ ...opts, auth }))
        console.log('[OK]', req.method, req.originalUrl)
        if (moduleResponse.headers) res.set(moduleResponse.headers)
        res.status(moduleResponse.status || 200).send(moduleResponse.body)
      } catch (e) {
        const err = e && e.body ? e : { status: 500, headers: {}, body: { code: 500, data: null, msg: e && e.message ? e.message : String(e) } }
        console.log('[ERR]', req.method, req.originalUrl, { status: err.status, body: err.body })
        if (!err.body) {
          res.status(404).send({ code: 404, data: null, msg: 'Not Found' })
          return
        }
        if (err.headers) res.set(err.headers)
        res.status(err.status || 500).send(err.body)
      }
    })
  }

  return app
}

/**
 * 启动 HTTP 服务
 * @param {Object} [options] { moduleDefs, port, host }
 * @returns {Promise<import('express').Express & { service: import('http').Server }>}
 */
async function startService(options = {}) {
  const app = await consturctServer(options.moduleDefs)
  const port = options.port || config.port
  const host = options.host !== undefined ? options.host : config.host
  app.service = app.listen(port, host, () => {
    console.log(`BaoZuPoApi server running @ http://${host || 'localhost'}:${port}`)
  })
  return app
}

module.exports = { getModulesDefinitions, consturctServer, startService }