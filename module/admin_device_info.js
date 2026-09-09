// 管理员设备信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/admin_device_info/
// 编程式：api.admin_device_info({}（参数透传）)  本地路由 /admin/device/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/admin_device_info/',
    method: 'GET',
    data: { ...params },
  })
