// 支付安全模式
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/safe/api/pay/get_safe_mode/
// 编程式：api.get_safe_mode({}（参数透传）)  本地路由 /get/safe/mode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/safe/api/pay/get_safe_mode/',
    method: 'GET',
    data: { ...params },
  })
