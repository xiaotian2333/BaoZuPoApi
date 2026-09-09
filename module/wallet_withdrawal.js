// 钱包提现
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/wallet_withdrawal/
// 编程式：api.wallet_withdrawal({}（参数透传）)  本地路由 /wallet/withdrawal（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/wallet_withdrawal/',
    method: 'POST',
    data: { ...params },
  })
