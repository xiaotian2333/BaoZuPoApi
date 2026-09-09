// 公共插座绑定网关
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/public_socket_bind_gateway/
// 编程式：api.public_socket_bind_gateway({}（参数透传）)  本地路由 /public/socket/bind/gateway（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/public_socket_bind_gateway/',
    method: 'POST',
    data: { ...params },
  })
