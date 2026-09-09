// 删除账单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/delete_bill/
// 编程式：api.delete_bill({}（参数透传）)  本地路由 /delete/bill（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/delete_bill/',
    method: 'POST',
    data: { ...params },
  })
