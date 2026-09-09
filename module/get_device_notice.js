// 设备公告
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_device_notice/
// 编程式：api.get_device_notice({}（参数透传）)  本地路由 /get/device/notice（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_device_notice/',
    method: 'GET',
    data: { ...params },
  })
