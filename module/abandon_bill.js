// 废弃账单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/abandon_bill/
// 编程式：api.abandon_bill({}（参数透传）)  本地路由 /abandon/bill（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/abandon_bill/',
    method: 'POST',
    data: { ...params },
  })
