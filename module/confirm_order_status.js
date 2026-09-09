// 确认订单状态
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/confirm_order_status/
// 编程式：api.confirm_order_status({}（参数透传）)  本地路由 /confirm/order/status（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/confirm_order_status/',
    method: 'POST',
    data: { ...params },
  })
