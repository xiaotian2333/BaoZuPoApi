// 时段指纹下发
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_fgp_time
// 编程式：api.lock_fgp_time({}（参数透传）)  本地路由 /lock/fgp/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_fgp_time',
    method: 'POST',
    data: { ...params },
  })
