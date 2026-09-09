// 绑定公共插座
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/bind_public_socket/
// 编程式：api.bind_public_socket({}（参数透传）)  本地路由 /bind/public/socket（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/bind_public_socket/',
    method: 'POST',
    data: { ...params },
  })
