// 更新租客
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/room/update_tenant/
// 编程式：api.update_tenant({}（参数透传）)  本地路由 /update/tenant（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/update_tenant/',
    method: 'PUT',
    data: { ...params },
  })
