// 更新设备分组
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_device_group/
// 编程式：api.update_device_group({}（参数透传）)  本地路由 /update/device/group（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_device_group/',
    method: 'POST',
    data: { ...params },
  })
