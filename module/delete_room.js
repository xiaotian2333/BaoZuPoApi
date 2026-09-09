// 删除房间
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/delete_room/
// 编程式：api.delete_room({}（参数透传）)  本地路由 /delete/room（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/delete_room/',
    method: 'POST',
    data: { ...params },
  })
