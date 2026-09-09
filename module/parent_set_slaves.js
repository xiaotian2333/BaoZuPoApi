// 主表绑定从表（从表配置）
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/parent_set_slaves
// 编程式：api.parent_set_slaves({}（参数透传）)  本地路由 /parent/set/slaves（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/parent_set_slaves',
    method: 'POST',
    data: { ...params },
  })
