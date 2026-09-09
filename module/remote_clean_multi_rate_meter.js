// 远程多费率电表-清除告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/remote_clean_multi_rate_meter
// 编程式：api.remote_clean_multi_rate_meter({}（参数透传）)  本地路由 /remote/clean/multi/rate/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/remote_clean_multi_rate_meter',
    method: 'POST',
    data: { ...params },
  })
