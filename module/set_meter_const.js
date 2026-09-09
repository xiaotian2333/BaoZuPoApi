// 设置电表常量
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_meter_const/
// 编程式：api.set_meter_const({}（参数透传）)  本地路由 /set/meter/const（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_meter_const/',
    method: 'POST',
    data: { ...params },
  })
