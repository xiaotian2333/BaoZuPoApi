// 管理员充值记录分页
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/admin_pay_list_by_next_time/
// 编程式：api.admin_pay_list_by_next_time({}（参数透传）)  本地路由 /admin/pay/list/by/next/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/admin_pay_list_by_next_time/',
    method: 'GET',
    data: { ...params },
  })
