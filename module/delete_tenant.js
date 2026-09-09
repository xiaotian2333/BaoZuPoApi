// 删除租客
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/delete_tenant/
// 编程式：api.delete_tenant({}（参数透传）)  本地路由 /delete/tenant（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/delete_tenant/',
    method: 'POST',
    data: { ...params },
  })
