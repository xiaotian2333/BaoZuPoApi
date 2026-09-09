// 永久指纹下发
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_fgp_forever
// 编程式：api.lock_fgp_forever({}（参数透传）)  本地路由 /lock/fgp/forever（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_fgp_forever',
    method: 'POST',
    data: { ...params },
  })
