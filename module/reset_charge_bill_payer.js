// 重置充电账单付款人
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/reset_charge_bill_payer/
// 编程式：api.reset_charge_bill_payer({}（参数透传）)  本地路由 /reset/charge/bill/payer（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/reset_charge_bill_payer/',
    method: 'POST',
    data: { ...params },
  })
