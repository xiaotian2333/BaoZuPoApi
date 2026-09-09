// 删除共享模板
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_share_template/
// 编程式：api.delete_share_template({}（参数透传）)  本地路由 /delete/share/template（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_share_template/',
    method: 'POST',
    data: { ...params },
  })
