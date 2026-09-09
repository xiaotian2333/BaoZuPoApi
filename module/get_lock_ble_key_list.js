// 门锁蓝牙钥匙列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_lock_ble_key_list/
// 编程式：api.get_lock_ble_key_list({}（参数透传）)  本地路由 /get/lock/ble/key/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_lock_ble_key_list/',
    method: 'GET',
    data: { ...params },
  })
