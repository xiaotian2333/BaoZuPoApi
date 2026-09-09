// 修改模板时段列表
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_template_time_list/
// 编程式：api.edit_template_time_list({}（参数透传）)  本地路由 /edit/template/time/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_template_time_list/',
    method: 'PUT',
    data: { ...params },
  })
