// 集中器下行-重置门锁密钥
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_reset_lock_key
// 编程式：api.collector_reset_lock_key({}（参数透传）)  本地路由 /collector/reset/lock/key（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_reset_lock_key',
    method: 'POST',
    data: { ...params },
  })
