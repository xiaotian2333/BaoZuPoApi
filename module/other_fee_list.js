// 其他费用列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/other_fee_list/
// 编程式：api.other_fee_list({}（参数透传）)  本地路由 /other/fee/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/other_fee_list/',
    method: 'GET',
    data: { ...params },
  })
