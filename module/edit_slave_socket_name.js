// 修改从表插座名
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_slave_socket_name/
// 编程式：api.edit_slave_socket_name({}（参数透传）)  本地路由 /edit/slave/socket/name（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_slave_socket_name/',
    method: 'PUT',
    data: { ...params },
  })
