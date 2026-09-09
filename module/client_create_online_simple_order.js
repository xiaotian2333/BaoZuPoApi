// 创建在线简易充值订单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_create_online_simple_order/
// 编程式：api.client_create_online_simple_order({}（参数透传）)  本地路由 /client/create/online/simple/order（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_create_online_simple_order/',
    method: 'POST',
    data: { ...params },
  })
