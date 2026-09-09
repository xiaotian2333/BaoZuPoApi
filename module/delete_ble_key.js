// 删除蓝牙钥匙
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_ble_key/
// 编程式：api.delete_ble_key({}（参数透传）)  本地路由 /delete/ble/key（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_ble_key/',
    method: 'POST',
    data: { ...params },
  })
