// 充值账单状态查询
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/charge_bill_status_info/
// 编程式：api.charge_bill_status_info({}（参数透传）)  本地路由 /charge/bill/status/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/charge_bill_status_info/',
    method: 'GET',
    data: { ...params },
  })
