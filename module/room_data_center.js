// 房间数据中心
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/room_data_center/
// 编程式：api.room_data_center({}（参数透传）)  本地路由 /room/data/center（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_data_center/',
    method: 'POST',
    data: { ...params },
  })
