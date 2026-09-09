// 查询转账订单
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/get_client_transfer_order/
// 编程式：api.get_client_transfer_order({}（参数透传）)  本地路由 /get/client/transfer/order（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_client_transfer_order/',
    method: 'GET',
    data: { ...params },
  })
