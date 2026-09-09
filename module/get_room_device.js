// 房间设备
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_room_device/
// 编程式：api.get_room_device({}（参数透传）)  本地路由 /get/room/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_room_device/',
    method: 'GET',
    data: { ...params },
  })
