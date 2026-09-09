// 设置设备公告
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_device_notice/
// 编程式：api.set_device_notice({}（参数透传）)  本地路由 /set/device/notice（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_device_notice/',
    method: 'POST',
    data: { ...params },
  })
