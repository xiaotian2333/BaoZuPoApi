// 添加模板电价
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/add_template_price/
// 编程式：api.add_template_price({}（参数透传）)  本地路由 /add/template/price（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/add_template_price/',
    method: 'POST',
    data: { ...params },
  })
