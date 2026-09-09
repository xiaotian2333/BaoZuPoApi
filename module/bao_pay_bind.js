// 宝付绑卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/bao_pay_bind/
// 编程式：api.bao_pay_bind({}（参数透传）)  本地路由 /bao/pay/bind（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/bao_pay_bind/',
    method: 'POST',
    data: { ...params },
  })
