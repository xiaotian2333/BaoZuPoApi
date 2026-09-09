// 客户端地址
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_address/
// 编程式：api.client_address({}（参数透传）)  本地路由 /client/address（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_address/',
    method: 'POST',
    data: { ...params },
  })
