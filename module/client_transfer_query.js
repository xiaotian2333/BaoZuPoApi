// 转账查询
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_transfer_query/
// 编程式：api.client_transfer_query({}（参数透传）)  本地路由 /client/transfer/query（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_transfer_query/',
    method: 'POST',
    data: { ...params },
  })
