// 添加租约合同
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/add_rental_contract/
// 编程式：api.add_rental_contract({}（参数透传）)  本地路由 /add/rental/contract（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/add_rental_contract/',
    method: 'POST',
    data: { ...params },
  })
