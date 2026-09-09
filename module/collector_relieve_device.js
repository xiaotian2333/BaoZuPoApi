// 集中器解除设备
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/collector_relieve_device/
// 编程式：api.collector_relieve_device({}（参数透传）)  本地路由 /collector/relieve/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/collector_relieve_device/',
    method: 'PUT',
    data: { ...params },
  })
