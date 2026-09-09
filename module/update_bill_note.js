// 更新账单备注
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/room/update_bill_note/
// 编程式：api.update_bill_note({}（参数透传）)  本地路由 /update/bill/note（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/update_bill_note/',
    method: 'PUT',
    data: { ...params },
  })
