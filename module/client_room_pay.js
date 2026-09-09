// 房间充值
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_room_pay/
// 编程式：api.client_room_pay({}（参数透传）)  本地路由 /client/room/pay（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_room_pay/',
    method: 'POST',
    data: { ...params },
  })
