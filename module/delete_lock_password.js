// 删除门锁密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/delete_lock_password
// 编程式：api.delete_lock_password({}（参数透传）)  本地路由 /delete/lock/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/delete_lock_password',
    method: 'POST',
    data: { ...params },
  })
