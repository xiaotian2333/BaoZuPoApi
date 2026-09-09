// 设置房间排序
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/set_room_sort/
// 编程式：api.set_room_sort({}（参数透传）)  本地路由 /set/room/sort（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/set_room_sort/',
    method: 'POST',
    data: { ...params },
  })
