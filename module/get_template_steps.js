// 模板步骤
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_template_steps/
// 编程式：api.get_template_steps({}（参数透传）)  本地路由 /get/template/steps（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_template_steps/',
    method: 'POST',
    data: { ...params },
  })
