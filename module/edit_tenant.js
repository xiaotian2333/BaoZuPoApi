// 编辑租客
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/room/edit_tenant/
// 编程式：api.edit_tenant({}（参数透传）)  本地路由 /edit/tenant（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/edit_tenant/',
    method: 'PUT',
    data: { ...params },
  })
