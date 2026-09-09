// 删除模板时段列表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_template_time_list/
// 编程式：api.delete_template_time_list({}（参数透传）)  本地路由 /delete/template/time/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_template_time_list/',
    method: 'POST',
    data: { ...params },
  })
