// 修改设备电价
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_device_price/
// 编程式：api.edit_device_price({}（参数透传）)  本地路由 /edit/device/price（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_device_price/',
    method: 'PUT',
    data: { ...params },
  })
