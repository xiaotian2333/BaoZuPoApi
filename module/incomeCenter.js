// 收入中心
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/device/incomeCenter
// 编程式：api.incomeCenter({}（参数透传）)  本地路由 /incomeCenter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/device/incomeCenter',
    method: 'GET',
    data: { ...params },
  })
