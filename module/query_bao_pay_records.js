// 宝付支付记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/query_bao_pay_records/
// 编程式：api.query_bao_pay_records({}（参数透传）)  本地路由 /query/bao/pay/records（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/query_bao_pay_records/',
    method: 'GET',
    data: { ...params },
  })
