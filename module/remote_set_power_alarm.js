// 远程指令-功率报警设置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/set_power_alarm
// 编程式：api.remote_set_power_alarm({}（参数透传）)  本地路由 /remote/set/power/alarm（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/set_power_alarm',
    method: 'POST',
    data: { ...params },
  })
