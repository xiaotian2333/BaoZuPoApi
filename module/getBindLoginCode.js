// 获取绑定登录码
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/getBindLoginCode/
// 编程式：api.getBindLoginCode({}（参数透传）)  本地路由 /getBindLoginCode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/getBindLoginCode/',
    method: 'GET',
    data: { ...params },
  })
