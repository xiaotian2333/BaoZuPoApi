// 其他用户登录
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/other_user_login/
// 编程式：api.other_user_login({}（参数透传）)  本地路由 /other/user/login（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/other_user_login/',
    method: 'POST',
    data: { ...params },
  })
