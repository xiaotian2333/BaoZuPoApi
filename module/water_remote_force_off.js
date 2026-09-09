// 远程水表-强制断电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/water_remote_force_off
// 编程式：api.water_remote_force_off({}（参数透传）)  本地路由 /water/remote/force/off（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/water_remote_force_off',
    method: 'POST',
    data: { ...params },
  })
