// 修改模板时段
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_template_time/
// 编程式：api.edit_template_time({}（参数透传）)  本地路由 /edit/template/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_template_time/',
    method: 'POST',
    data: { ...params },
  })
