// 租金结余
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/balance_rental/
// 编程式：api.balance_rental({}（参数透传）)  本地路由 /balance/rental（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/balance_rental/',
    method: 'POST',
    data: { ...params },
  })
