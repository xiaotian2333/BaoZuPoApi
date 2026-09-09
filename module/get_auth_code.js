// 获取授权码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_auth_code/
// 编程式：api.get_auth_code({}（参数透传）)  本地路由 /get/auth/code（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_auth_code/',
    method: 'POST',
    data: { ...params },
  })
