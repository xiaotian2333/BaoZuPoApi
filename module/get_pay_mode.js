// 获取支付方式
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/adapay/get_pay_mode/
// 编程式：api.get_pay_mode({}（参数透传）)  本地路由 /get/pay/mode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/get_pay_mode/',
    method: 'GET',
    data: { ...params },
  })
