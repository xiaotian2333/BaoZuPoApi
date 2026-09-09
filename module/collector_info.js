// 集中器信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/collector_info/
// 编程式：api.collector_info({}（参数透传）)  本地路由 /collector/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/collector_info/',
    method: 'GET',
    data: { ...params },
  })
