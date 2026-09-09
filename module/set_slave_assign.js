// 设置从表分配
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_slave_assign/
// 编程式：api.set_slave_assign({}（参数透传）)  本地路由 /set/slave/assign（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_slave_assign/',
    method: 'POST',
    data: { ...params },
  })
