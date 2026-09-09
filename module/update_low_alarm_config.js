// 更新低电量告警配置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_low_alarm_config/
// 编程式：api.update_low_alarm_config({}（参数透传）)  本地路由 /update/low/alarm/config（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_low_alarm_config/',
    method: 'POST',
    data: { ...params },
  })
