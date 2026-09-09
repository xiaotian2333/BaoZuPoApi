// 房间租金记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/room_rent_record/
// 编程式：api.room_rent_record({}（参数透传）)  本地路由 /room/rent/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_rent_record/',
    method: 'GET',
    data: { ...params },
  })
