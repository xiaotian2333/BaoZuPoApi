// 设置设备排序
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_device_sort/
// 编程式：api.set_device_sort({}（参数透传）)  本地路由 /set/device/sort（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_device_sort/',
    method: 'POST',
    data: { ...params },
  })
