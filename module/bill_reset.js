// 账单重置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/bill_reset/
// 编程式：api.bill_reset({}（参数透传）)  本地路由 /bill/reset（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/bill_reset/',
    method: 'POST',
    data: { ...params },
  })
