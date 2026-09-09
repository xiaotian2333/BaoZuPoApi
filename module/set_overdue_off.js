// 设置逾期断电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/set_overdue_off/
// 编程式：api.set_overdue_off({}（参数透传）)  本地路由 /set/overdue/off（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/set_overdue_off/',
    method: 'POST',
    data: { ...params },
  })
