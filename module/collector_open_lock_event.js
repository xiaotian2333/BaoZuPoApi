// 集中器下行-门锁开关门事件
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_open_lock_event
// 编程式：api.collector_open_lock_event({}（参数透传）)  本地路由 /collector/open/lock/event（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_open_lock_event',
    method: 'POST',
    data: { ...params },
  })
