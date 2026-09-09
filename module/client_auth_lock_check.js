// 锁授权校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_auth_lock_check/
// 编程式：api.client_auth_lock_check({}（参数透传）)  本地路由 /client/auth/lock/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_auth_lock_check/',
    method: 'POST',
    data: { ...params },
  })
