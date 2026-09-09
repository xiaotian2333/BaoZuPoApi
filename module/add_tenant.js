// 添加租客
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/add_tenant/
// 编程式：api.add_tenant({}（参数透传）)  本地路由 /add/tenant（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/add_tenant/',
    method: 'POST',
    data: { ...params },
  })
