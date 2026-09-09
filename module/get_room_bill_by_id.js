// 按ID查房间账单
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_room_bill_by_id/
// 编程式：api.get_room_bill_by_id({}（参数透传）)  本地路由 /get/room/bill/by/id（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_room_bill_by_id/',
    method: 'GET',
    data: { ...params },
  })
