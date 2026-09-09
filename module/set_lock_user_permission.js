// 设置门锁用户权限
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_lock_user_permission/
// 编程式：api.set_lock_user_permission({}（参数透传）)  本地路由 /set/lock/user/permission（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_lock_user_permission/',
    method: 'POST',
    data: { ...params },
  })
