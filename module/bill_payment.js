// 账单缴费
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/bill_payment/
// 编程式：api.bill_payment({}（参数透传）)  本地路由 /bill/payment（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/bill_payment/',
    method: 'POST',
    data: { ...params },
  })
