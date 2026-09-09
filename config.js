// 全局配置：优先读 .env（dotenv 未安装时手动兜底解析）
const path = require('node:path')
try {
  require('dotenv').config({ path: path.join(__dirname, '.env') })
} catch (e) {
  require('./util/util').loadEnvFile(path.join(__dirname, '.env'))
}

const env = process.env

module.exports = {
  // 云平台接口基础地址
  baseUrl: env.BASE_URL || 'https://bzp.iyunmu.com/bzp_backup',
  // HTTP 服务
  port: Number(env.PORT || '7860'),
  host: env.HOST || '',
  // 默认认证凭据（可被模块/调用参数覆盖）
  auth: {
    csrfToken: env.CSRF_TOKEN || '',
    userid: env.USERID || '',
    token: env.X_TOKEN || '',
    mappId: env.MAPP_ID || '0',
    roleId: env.ROLE_ID || '0',
  },
  // 特定文件 → 自定义路由映射（不走默认的下划线转斜杠规则）
  specificRoute: {},
  // 云端不使用 ciphertext 加密的接口路径（保留扩展用）
  noEncryptPaths: ['/v1/client/client_notice/', '/v1/client/client_notice_check/'],
}