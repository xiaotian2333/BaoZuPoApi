// 房间解绑设备
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/room_unbind_device/
// 编程式：api.room_unbind_device({}（参数透传）)  本地路由 /room/unbind/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_unbind_device/',
    method: 'POST',
    data: { ...params },
  })
