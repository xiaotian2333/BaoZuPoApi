// 设置蓝牙设备列表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/set_ble_devlist
// 编程式：api.set_ble_devlist({}（参数透传）)  本地路由 /set/ble/devlist（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/set_ble_devlist',
    method: 'POST',
    data: { ...params },
  })
