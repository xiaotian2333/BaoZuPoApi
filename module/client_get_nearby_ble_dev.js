// 附近蓝牙设备
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_get_nearby_ble_dev/
// 编程式：api.client_get_nearby_ble_dev({}（参数透传）)  本地路由 /client/get/nearby/ble/dev（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_get_nearby_ble_dev/',
    method: 'POST',
    data: { ...params },
  })
