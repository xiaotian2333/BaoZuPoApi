// 历史租客
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_history_tenant/
// 编程式：api.get_history_tenant({}（参数透传）)  本地路由 /get/history/tenant（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_history_tenant/',
    method: 'GET',
    data: { ...params },
  })
