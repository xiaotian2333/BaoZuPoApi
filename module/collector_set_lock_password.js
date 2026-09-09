// 集中器下行-设置门锁密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_set_lock_password
// 编程式：api.collector_set_lock_password({}（参数透传）)  本地路由 /collector/set/lock/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_set_lock_password',
    method: 'POST',
    data: { ...params },
  })
