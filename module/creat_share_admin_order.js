// 创建共享管理端订单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/creat_share_admin_order/
// 编程式：api.creat_share_admin_order({}（参数透传）)  本地路由 /creat/share/admin/order（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/creat_share_admin_order/',
    method: 'POST',
    data: { ...params },
  })
