// 用户历史设备
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/device/userHistoryDev
// 编程式：api.userHistoryDev({}（参数透传）)  本地路由 /userHistoryDev（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/device/userHistoryDev',
    method: 'GET',
    data: { ...params },
  })
