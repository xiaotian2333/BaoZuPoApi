// 修改门锁用户
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_lock_user/
// 编程式：api.edit_lock_user({}（参数透传）)  本地路由 /edit/lock/user（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_lock_user/',
    method: 'PUT',
    data: { ...params },
  })
