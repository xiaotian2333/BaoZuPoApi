// 跳过当前充电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/skip_current_charge/
// 编程式：api.skip_current_charge({}（参数透传）)  本地路由 /skip/current/charge（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/skip_current_charge/',
    method: 'POST',
    data: { ...params },
  })
