// 解绑从表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/unBind_slave_meter/
// 编程式：api.unBind_slave_meter({}（参数透传）)  本地路由 /unBind/slave/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/unBind_slave_meter/',
    method: 'POST',
    data: { ...params },
  })
