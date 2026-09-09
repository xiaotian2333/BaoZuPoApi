// 获取蓝牙设备列表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/get_ble_dev_list
// 编程式：api.get_ble_dev_list({}（参数透传）)  本地路由 /get/ble/dev/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/get_ble_dev_list',
    method: 'POST',
    data: { ...params },
  })
