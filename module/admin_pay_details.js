// 管理员充值明细
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/admin_pay_details/
// 编程式：api.admin_pay_details({}（参数透传）)  本地路由 /admin/pay/details（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/admin_pay_details/',
    method: 'POST',
    data: { ...params },
  })
