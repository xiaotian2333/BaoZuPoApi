// 加解密工具：还原的云平台 ciphertext 协议（AES-256-CBC + 交错 IV，hex→base64）
const crypto = require('node:crypto')

// 生成大写的 sha256 hex
function sha256HexUpper(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex').toUpperCase()
}

// 传输密钥：sha256((x-timestamp + X-CSRFToken + userid + x-timestamp).toUpperCase()).toUpperCase()
function getSignKey(timestamp, csrfToken, userid) {
  return sha256HexUpper(`${timestamp}${csrfToken}${userid}${timestamp}`.toUpperCase())
}

// 生成 n 位随机大写字母数字串（用作 IV 文本）
function randomAlnumUpper(n = 16) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const bytes = crypto.randomBytes(n)
  let out = ''
  for (let i = 0; i < n; i++) out += chars[bytes[i] % chars.length]
  return out
}

// 加密：明文 → ciphertext(base64)
// 协议：IV = 16 位随机大写字母数字串的 utf8 字节；AES-256-CBC；
//       前 32 字节为 IV 与密文前 16 字节交错（[iv0,ct0,iv1,ct1,...]），
//       剩余密文字节顺序追加；整个字节数组转 hex 串再 base64
function encryptData(keyHex, plainText) {
  const key = Buffer.from(keyHex, 'hex')
  const iv = Buffer.from(randomAlnumUpper(16), 'utf8')
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
  const ct = Buffer.concat([cipher.update(Buffer.from(plainText, 'utf8')), cipher.final()])
  const merged = Buffer.alloc(iv.length + ct.length)
  // 按解密同款规则写入：偶数位(前16个)放 iv，其余顺次放密文
  let ivIdx = 0
  let ctIdx = 0
  for (let i = 0; i < merged.length; i++) {
    if (i % 2 === 0 && i / 2 < 16) merged[i] = iv[ivIdx++]
    else merged[i] = ct[ctIdx++]
  }
  return Buffer.from(merged.toString('hex'), 'ascii').toString('base64')
}

// 解密：ciphertext(base64) → 明文 utf8
function decryptData(keyHex, cipherB64) {
  const hexStr = Buffer.from(String(cipherB64), 'base64').toString('ascii')
  const merged = Buffer.from(hexStr, 'hex')
  const iv = []
  const ct = []
  for (let i = 0; i < merged.length; i++) {
    if (i % 2 === 0 && i / 2 < 16) iv.push(merged[i])
    else ct.push(merged[i])
  }
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(keyHex, 'hex'), Buffer.from(iv))
  const plain = Buffer.concat([decipher.update(Buffer.from(ct)), decipher.final()])
  return plain.toString('utf8')
}

module.exports = { sha256HexUpper, getSignKey, randomAlnumUpper, encryptData, decryptData }