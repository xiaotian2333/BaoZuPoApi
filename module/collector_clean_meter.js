// 集中器下行-清除电表告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_clean_meter
// 编程式：api.collector_clean_meter({}（参数透传）)  本地路由 /collector/clean/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_clean_meter',
    method: 'POST',
    data: { ...params },
  })
