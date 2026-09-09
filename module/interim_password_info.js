// 临时密码信息
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/interim_password_info/
// 编程式：api.interim_password_info({}（参数透传）)  本地路由 /interim/password/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/interim_password_info/',
    method: 'POST',
    data: { ...params },
  })
