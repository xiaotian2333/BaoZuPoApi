// 模板详情
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_template_details/
// 编程式：api.get_template_details({}（参数透传）)  本地路由 /get/template/details（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_template_details/',
    method: 'POST',
    data: { ...params },
  })
