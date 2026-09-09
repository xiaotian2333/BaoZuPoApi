// 房间列表初始化
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/room_list_init/
// 编程式：api.room_list_init({}（参数透传）)  本地路由 /room/list/init（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_list_init/',
    method: 'POST',
    data: { ...params },
  })
