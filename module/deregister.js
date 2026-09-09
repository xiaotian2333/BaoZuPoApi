// 注销
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/deregister/
// 编程式：api.deregister({}（参数透传）)  本地路由 /deregister（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/deregister/',
    method: 'POST',
    data: { ...params },
  })
