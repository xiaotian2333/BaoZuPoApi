// 设置门锁自定义密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/set_lock_custom_password
// 编程式：api.set_lock_custom_password({}（参数透传）)  本地路由 /set/lock/custom/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/set_lock_custom_password',
    method: 'POST',
    data: { ...params },
  })
