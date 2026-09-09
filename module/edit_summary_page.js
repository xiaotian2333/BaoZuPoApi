// 编辑汇总页
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_summary_page/
// 编程式：api.edit_summary_page({}（参数透传）)  本地路由 /edit/summary/page（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_summary_page/',
    method: 'POST',
    data: { ...params },
  })
