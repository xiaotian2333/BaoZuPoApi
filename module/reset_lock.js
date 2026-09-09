// 重置门锁
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/reset_lock
// 编程式：api.reset_lock({}（参数透传）)  本地路由 /reset/lock（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/reset_lock',
    method: 'POST',
    data: { ...params },
  })
