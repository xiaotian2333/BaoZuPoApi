// 房间收入
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_room_income/
// 编程式：api.get_room_income({}（参数透传）)  本地路由 /get/room/income（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_room_income/',
    method: 'GET',
    data: { ...params },
  })
