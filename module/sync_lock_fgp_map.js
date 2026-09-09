// 同步门锁指纹图谱
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_lock_fgp_map
// 编程式：api.sync_lock_fgp_map({}（参数透传）)  本地路由 /sync/lock/fgp/map（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_lock_fgp_map',
    method: 'POST',
    data: { ...params },
  })
