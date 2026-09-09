// 添加多费率模板
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/add_multi_template/
// 编程式：api.add_multi_template({}（参数透传）)  本地路由 /add/multi/template（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/add_multi_template/',
    method: 'POST',
    data: { ...params },
  })
