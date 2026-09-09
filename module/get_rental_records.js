// 租金记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_rental_records/
// 编程式：api.get_rental_records({}（参数透传）)  本地路由 /get/rental/records（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_rental_records/',
    method: 'GET',
    data: { ...params },
  })
