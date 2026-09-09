// 同步门锁用户时间
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_lock_update_user_time
// 编程式：api.sync_lock_update_user_time({}（参数透传）)  本地路由 /sync/lock/update/user/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_lock_update_user_time',
    method: 'POST',
    data: { ...params },
  })
