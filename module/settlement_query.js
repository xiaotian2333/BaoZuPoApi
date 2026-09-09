// 结算查询
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/settlement_query/
// 编程式：api.settlement_query({}（参数透传）)  本地路由 /settlement/query（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/settlement_query/',
    method: 'POST',
    data: { ...params },
  })
