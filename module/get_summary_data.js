// 汇总数据
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_summary_data/
// 编程式：api.get_summary_data({}（参数透传）)  本地路由 /get/summary/data（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_summary_data/',
    method: 'GET',
    data: { ...params },
  })
