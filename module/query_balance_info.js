// 余额查询
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/query_balance_info/
// 编程式：api.query_balance_info({}（参数透传）)  本地路由 /query/balance/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/query_balance_info/',
    method: 'GET',
    data: { ...params },
  })
