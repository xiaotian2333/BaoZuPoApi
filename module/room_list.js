// 房间列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/room_list/
// 编程式：api.room_list({}（参数透传）)  本地路由 /room/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_list/',
    method: 'GET',
    data: { ...params },
  })
