// 设备告警配置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_device_alarm_config/
// 编程式：api.get_device_alarm_config({}（参数透传）)  本地路由 /get/device/alarm/config（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_device_alarm_config/',
    method: 'POST',
    data: { ...params },
  })
