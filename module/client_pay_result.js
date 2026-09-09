// 充值结果
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_pay_result/
// 编程式：api.client_pay_result({}（参数透传）)  本地路由 /client/pay/result（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_pay_result/',
    method: 'POST',
    data: { ...params },
  })
