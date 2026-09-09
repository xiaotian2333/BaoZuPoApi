// 远程多费率电表-设置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/remote_multi_rate_set_meter
// 编程式：api.remote_multi_rate_set_meter({}（参数透传）)  本地路由 /remote/multi/rate/set/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/remote_multi_rate_set_meter',
    method: 'POST',
    data: { ...params },
  })
