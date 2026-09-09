// 修改模板电价
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_template_price/
// 编程式：api.edit_template_price({}（参数透传）)  本地路由 /edit/template/price（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_template_price/',
    method: 'PUT',
    data: { ...params },
  })
