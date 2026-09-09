// Mesh门锁-删除指纹
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_delete_fgp
// 编程式：api.lock_mesh_delete_fgp({}（参数透传）)  本地路由 /lock/mesh/delete/fgp（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_delete_fgp',
    method: 'POST',
    data: { ...params },
  })
