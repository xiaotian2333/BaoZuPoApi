// 历史账单
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_history_bill/
// 编程式：api.get_history_bill({}（参数透传）)  本地路由 /get/history/bill（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_history_bill/',
    method: 'GET',
    data: { ...params },
  })
