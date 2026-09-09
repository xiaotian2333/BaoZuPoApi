// 杭州银行信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/adapay/get_hz_bank_info/
// 编程式：api.get_hz_bank_info({}（参数透传）)  本地路由 /get/hz/bank/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/get_hz_bank_info/',
    method: 'GET',
    data: { ...params },
  })
