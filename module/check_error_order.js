// 校验错误订单
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/check_error_order/
// 编程式：api.check_error_order({}（参数透传）)  本地路由 /check/error/order（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/check_error_order/',
    method: 'POST',
    data: { ...params },
  })
