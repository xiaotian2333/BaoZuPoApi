// 批量设置功率报警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/batch_set_power_alarm/
// 编程式：api.batch_set_power_alarm({}（参数透传）)  本地路由 /batch/set/power/alarm（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/batch_set_power_alarm/',
    method: 'POST',
    data: { ...params },
  })
