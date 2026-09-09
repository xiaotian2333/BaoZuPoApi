// 服务费
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/serviceCharge/
// 编程式：api.serviceCharge({}（参数透传）)  本地路由 /serviceCharge（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/serviceCharge/',
    method: 'GET',
    data: { ...params },
  })
