// 获取门锁密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_lock_password/
// 编程式：api.get_lock_password({}（参数透传）)  本地路由 /get/lock/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_lock_password/',
    method: 'POST',
    data: { ...params },
  })
