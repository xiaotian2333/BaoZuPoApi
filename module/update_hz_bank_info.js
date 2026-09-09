// 更新杭州银行信息
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/update_hz_bank_info/
// 编程式：api.update_hz_bank_info({}（参数透传）)  本地路由 /update/hz/bank/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/update_hz_bank_info/',
    method: 'POST',
    data: { ...params },
  })
