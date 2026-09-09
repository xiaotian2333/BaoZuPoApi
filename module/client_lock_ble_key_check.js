// 门锁蓝牙钥匙校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_lock_ble_key_check/
// 编程式：api.client_lock_ble_key_check({}（参数透传）)  本地路由 /client/lock/ble/key/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_lock_ble_key_check/',
    method: 'POST',
    data: { ...params },
  })
