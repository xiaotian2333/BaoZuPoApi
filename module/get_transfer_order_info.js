// 转账订单信息
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/get_transfer_order_info/
// 编程式：api.get_transfer_order_info({}（参数透传）)  本地路由 /get/transfer/order/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_transfer_order_info/',
    method: 'GET',
    data: { ...params },
  })
