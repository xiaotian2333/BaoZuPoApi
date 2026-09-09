// 修改模板名
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_template_name/
// 编程式：api.edit_template_name({}（参数透传）)  本地路由 /edit/template/name（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_template_name/',
    method: 'POST',
    data: { ...params },
  })
