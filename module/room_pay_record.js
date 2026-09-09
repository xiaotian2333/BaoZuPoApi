// 房间缴费记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/room_pay_record/
// 编程式：api.room_pay_record({}（参数透传）)  本地路由 /room/pay/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_pay_record/',
    method: 'GET',
    data: { ...params },
  })
