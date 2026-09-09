// 多费率电量
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/get_multi_rate_energy/
// 编程式：api.get_multi_rate_energy({}（参数透传）)  本地路由 /get/multi/rate/energy（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_multi_rate_energy/',
    method: 'POST',
    data: { ...params },
  })
