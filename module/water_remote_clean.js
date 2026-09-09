// 远程水表-清除告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/water_remote_clean
// 编程式：api.water_remote_clean({}（参数透传）)  本地路由 /water/remote/clean（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/water_remote_clean',
    method: 'POST',
    data: { ...params },
  })
