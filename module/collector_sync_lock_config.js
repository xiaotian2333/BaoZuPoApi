// 集中器下行-同步门锁配置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_sync_lock_config
// 编程式：api.collector_sync_lock_config({}（参数透传）)  本地路由 /collector/sync/lock/config（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_sync_lock_config',
    method: 'POST',
    data: { ...params },
  })
