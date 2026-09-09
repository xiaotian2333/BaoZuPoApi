// 重置门锁密钥
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/reset_lock_key
// 编程式：api.reset_lock_key({}（参数透传）)  本地路由 /reset/lock/key（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/reset_lock_key',
    method: 'POST',
    data: { ...params },
  })
