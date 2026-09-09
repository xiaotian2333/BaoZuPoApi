// 设备收入记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/device/IncomeRecord
// 编程式：api.IncomeRecord({}（参数透传）)  本地路由 /IncomeRecord（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/device/IncomeRecord',
    method: 'GET',
    data: { ...params },
  })
