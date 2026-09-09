// 从表-清除告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/slave_clean_meter
// 编程式：api.slave_clean_meter({}（参数透传）)  本地路由 /slave/clean/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/slave_clean_meter',
    method: 'POST',
    data: { ...params },
  })
