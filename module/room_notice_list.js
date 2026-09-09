// 房间公告列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/room_notice_list/
// 编程式：api.room_notice_list({}（参数透传）)  本地路由 /room/notice/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/room_notice_list/',
    method: 'GET',
    data: { ...params },
  })
