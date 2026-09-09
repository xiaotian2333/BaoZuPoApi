// 电表复位记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/reset_meter_record/
// 编程式：api.reset_meter_record({}（参数透传）)  本地路由 /reset/meter/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/reset_meter_record/',
    method: 'GET',
    data: { ...params },
  })
