// 设置设备电价
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/device_price_set/
// 编程式：api.device_price_set({}（参数透传）)  本地路由 /device/price/set（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/device_price_set/',
    method: 'POST',
    data: { ...params },
  })
