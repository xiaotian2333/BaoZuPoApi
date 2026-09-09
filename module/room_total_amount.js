// 房间总金额
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/room_total_amount/
// 编程式：api.room_total_amount({}（参数透传）)  本地路由 /room/total/amount（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_total_amount/',
    method: 'GET',
    data: { ...params },
  })
