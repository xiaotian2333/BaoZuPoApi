// 启用/停用充电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_charge_enable/
// 编程式：api.set_charge_enable({}（参数透传）)  本地路由 /set/charge/enable（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_charge_enable/',
    method: 'POST',
    data: { ...params },
  })
