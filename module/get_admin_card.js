// 获取管理员卡
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_admin_card/
// 编程式：api.get_admin_card({}（参数透传）)  本地路由 /get/admin/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_admin_card/',
    method: 'GET',
    data: { ...params },
  })
