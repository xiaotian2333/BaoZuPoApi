// 从表-抄读
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/slave_get_meter
// 编程式：api.slave_get_meter({}（参数透传）)  本地路由 /slave/get/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/slave_get_meter',
    method: 'POST',
    data: { ...params },
  })
