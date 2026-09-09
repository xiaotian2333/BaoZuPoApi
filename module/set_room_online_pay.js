// 设置房间在线缴费
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_room_online_pay/
// 编程式：api.set_room_online_pay({}（参数透传）)  本地路由 /set/room/online/pay（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_room_online_pay/',
    method: 'POST',
    data: { ...params },
  })
