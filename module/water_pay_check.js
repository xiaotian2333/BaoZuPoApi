// 水表支付校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/water_pay_check
// 编程式：api.water_pay_check({}（参数透传）)  本地路由 /water/pay/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/water_pay_check',
    method: 'POST',
    data: { ...params },
  })
