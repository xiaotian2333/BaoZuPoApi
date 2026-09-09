// 删除角色
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_role/
// 编程式：api.delete_role({}（参数透传）)  本地路由 /delete/role（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_role/',
    method: 'POST',
    data: { ...params },
  })
