// 更新或创建角色
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_or_creat_role/
// 编程式：api.update_or_creat_role({}（参数透传）)  本地路由 /update/or/creat/role（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_or_creat_role/',
    method: 'POST',
    data: { ...params },
  })
