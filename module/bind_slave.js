// 绑定从表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/bind_slave/
// 编程式：api.bind_slave({}（参数透传）)  本地路由 /bind/slave（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/bind_slave/',
    method: 'POST',
    data: { ...params },
  })
