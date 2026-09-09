// 同步门锁密码链
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_lock_pass
// 编程式：api.sync_lock_pass({}（参数透传）)  本地路由 /sync/lock/pass（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_lock_pass',
    method: 'POST',
    data: { ...params },
  })
