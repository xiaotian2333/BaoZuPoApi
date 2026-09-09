// 房间绑定设备
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/room_bind_device/
// 编程式：api.room_bind_device({}（参数透传）)  本地路由 /room/bind/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_bind_device/',
    method: 'POST',
    data: { ...params },
  })
