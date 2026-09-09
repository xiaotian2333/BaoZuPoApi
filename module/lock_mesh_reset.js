// Mesh门锁-重置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_reset
// 编程式：api.lock_mesh_reset({}（参数透传）)  本地路由 /lock/mesh/reset（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_reset',
    method: 'POST',
    data: { ...params },
  })
