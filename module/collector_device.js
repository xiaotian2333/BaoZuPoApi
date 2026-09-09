// 集中器设备列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/collector_device/
// 编程式：api.collector_device({}（参数透传）)  本地路由 /collector/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/collector_device/',
    method: 'GET',
    data: { ...params },
  })
