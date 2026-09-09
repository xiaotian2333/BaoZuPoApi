// 充电到期断电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_charge_expire_off/
// 编程式：api.set_charge_expire_off({}（参数透传）)  本地路由 /set/charge/expire/off（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_charge_expire_off/',
    method: 'POST',
    data: { ...params },
  })
