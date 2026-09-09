// 更换从表插座
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/replace_slave_socket/
// 编程式：api.replace_slave_socket({}（参数透传）)  本地路由 /replace/slave/socket（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/replace_slave_socket/',
    method: 'PUT',
    data: { ...params },
  })
