// 校验常开设备码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/check_common_device_code/
// 编程式：api.check_common_device_code({}（参数透传）)  本地路由 /check/common/device/code（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/check_common_device_code/',
    method: 'POST',
    data: { ...params },
  })
