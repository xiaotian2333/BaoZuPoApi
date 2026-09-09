// 集中器下行-电表抄读
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_read_meter
// 编程式：api.collector_read_meter({}（参数透传）)  本地路由 /collector/read/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_read_meter',
    method: 'POST',
    data: { ...params },
  })
