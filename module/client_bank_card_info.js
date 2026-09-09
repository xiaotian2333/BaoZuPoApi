// 银行卡信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/client_bank_card_info/
// 编程式：api.client_bank_card_info({}（参数透传）)  本地路由 /client/bank/card/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_bank_card_info/',
    method: 'GET',
    data: { ...params },
  })
