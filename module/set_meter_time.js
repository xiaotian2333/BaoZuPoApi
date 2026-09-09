// 设置电表时间
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_meter_time/
// 编程式：api.set_meter_time({}（参数透传）)  本地路由 /set/meter/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_meter_time/',
    method: 'POST',
    data: { ...params },
  })
