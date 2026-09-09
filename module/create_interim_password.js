// 创建临时密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/create_interim_password/
// 编程式：api.create_interim_password({}（参数透传）)  本地路由 /create/interim/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/create_interim_password/',
    method: 'POST',
    data: { ...params },
  })
