#!/usr/bin/env node
// CLI 入口：node app.js 启动 HTTP 服务（模型式加载）
async function start() {
  await require('./server').startService()
}

start().catch(console.error)