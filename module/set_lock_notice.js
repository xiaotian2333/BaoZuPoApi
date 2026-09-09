// 设置门锁公告
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_lock_notice/
// 编程式：api.set_lock_notice({}（参数透传）)  本地路由 /set/lock/notice（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_lock_notice/',
    method: 'POST',
    data: { ...params },
  })
