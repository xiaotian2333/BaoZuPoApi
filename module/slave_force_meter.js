// 从表-强制断电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/slave_force_meter
// 编程式：api.slave_force_meter({}（参数透传）)  本地路由 /slave/force/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/slave_force_meter',
    method: 'POST',
    data: { ...params },
  })
