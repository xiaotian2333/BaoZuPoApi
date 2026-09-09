// 切换支付方式
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/change_pay_mode/
// 编程式：api.change_pay_mode({}（参数透传）)  本地路由 /change/pay/mode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/change_pay_mode/',
    method: 'POST',
    data: { ...params },
  })
