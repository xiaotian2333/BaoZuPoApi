// 登录校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_login_check/
// 编程式：api.edit_login_check({}（参数透传）)  本地路由 /edit/login/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_login_check/',
    method: 'POST',
    data: { ...params },
  })
