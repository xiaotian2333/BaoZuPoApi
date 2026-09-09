// 更新授权权限
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_auth_permission/
// 编程式：api.update_auth_permission({}（参数透传）)  本地路由 /update/auth/permission（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_auth_permission/',
    method: 'POST',
    data: { ...params },
  })
