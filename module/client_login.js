// 客户端登录
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_login/
// 编程式：api.client_login({}（参数透传）)  本地路由 /client/login（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_login/',
    method: 'POST',
    data: { ...params },
  })
