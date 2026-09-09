// 集中器下行-改门锁时段密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_edit_password_time_range
// 编程式：api.collector_edit_password_time_range({}（参数透传）)  本地路由 /collector/edit/password/time/range（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_edit_password_time_range',
    method: 'POST',
    data: { ...params },
  })
