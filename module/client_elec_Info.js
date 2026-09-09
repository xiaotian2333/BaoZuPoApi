// 电表电气信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/client_elec_Info/
// 编程式：api.client_elec_Info({}（参数透传）)  本地路由 /client/elec/Info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_elec_Info/',
    method: 'GET',
    data: { ...params },
  })
