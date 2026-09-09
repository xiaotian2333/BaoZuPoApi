// 门锁用户密码
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_lock_user_pass/
// 编程式：api.get_lock_user_pass({}（参数透传）)  本地路由 /get/lock/user/pass（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_lock_user_pass/',
    method: 'GET',
    data: { ...params },
  })
