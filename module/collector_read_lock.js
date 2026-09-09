// 集中器下行-读门锁
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_read_lock
// 编程式：api.collector_read_lock({}（参数透传）)  本地路由 /collector/read/lock（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_read_lock',
    method: 'POST',
    data: { ...params },
  })
