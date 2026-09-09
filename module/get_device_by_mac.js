// 按MAC查设备
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/get_device_by_mac/
// 编程式：api.get_device_by_mac({}（参数透传）)  本地路由 /get/device/by/mac（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_device_by_mac/',
    method: 'POST',
    data: { ...params },
  })
