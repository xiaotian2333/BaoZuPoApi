// 客户端公告
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_notice/
// 编程式：api.client_notice({}（参数透传）)  本地路由 /client/notice（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_notice/',
    method: 'POST',
    data: { ...params },
  })
