// 告警信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_alarm_info/
// 编程式：api.get_alarm_info({}（参数透传）)  本地路由 /get/alarm/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_alarm_info/',
    method: 'GET',
    data: { ...params },
  })
