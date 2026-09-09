// 通用辅助函数
const fs = require('node:fs')
const path = require('node:path')

// 手动解析 .env 文件（在 dotenv 未安装时兜底使用），把键值写入 process.env
// 只处理简单的 KEY=VALUE 行，忽略注释与空行
function loadEnvFile(filePath) {
  const abs = path.resolve(filePath)
  if (!fs.existsSync(abs)) return
  for (const line of fs.readFileSync(abs, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!m) continue
    process.env[m[1]] = m[2]
  }
}

module.exports = { loadEnvFile }