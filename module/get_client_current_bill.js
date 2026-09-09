// 查询当前账单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/get_client_current_bill/
// 编程式：api.get_client_current_bill({}（参数透传）)  本地路由 /get/client/current/bill（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_client_current_bill/',
    method: 'POST',
    data: { ...params },
  })
