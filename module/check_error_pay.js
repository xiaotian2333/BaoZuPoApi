// 支付校验（响应为明文，不返回 ciphertext）
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/check_error_pay/
// 编程式：api.check_error_pay({ sn, ... })  （具体业务参数待验证，默认传 sn）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/check_error_pay/',
    method: 'POST',
    data: { sn: params.sn },
  })