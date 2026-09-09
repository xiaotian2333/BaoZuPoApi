// 设备排行榜
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/deviceRank/
// 编程式：api.deviceRank({}（参数透传）)  本地路由 /deviceRank（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/deviceRank/',
    method: 'GET',
    data: { ...params },
  })
