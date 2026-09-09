// 同步门锁音量
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_lock_volume
// 编程式：api.sync_lock_volume({}（参数透传）)  本地路由 /sync/lock/volume（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_lock_volume',
    method: 'POST',
    data: { ...params },
  })
