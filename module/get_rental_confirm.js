// 租金确认
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_rental_confirm/
// 编程式：api.get_rental_confirm({}（参数透传）)  本地路由 /get/rental/confirm（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_rental_confirm/',
    method: 'GET',
    data: { ...params },
  })
