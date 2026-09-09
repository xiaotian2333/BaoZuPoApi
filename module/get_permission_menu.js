// 权限菜单
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_permission_menu/
// 编程式：api.get_permission_menu({}（参数透传）)  本地路由 /get/permission/menu（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_permission_menu/',
    method: 'GET',
    data: { ...params },
  })
