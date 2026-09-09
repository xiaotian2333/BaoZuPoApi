// 批量修改设备电价
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/batch_edit_device_price/
// 编程式：api.batch_edit_device_price({}（参数透传）)  本地路由 /batch/edit/device/price（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/batch_edit_device_price/',
    method: 'POST',
    data: { ...params },
  })
