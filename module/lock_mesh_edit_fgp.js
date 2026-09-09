// Mesh门锁-编辑指纹
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_edit_fgp
// 编程式：api.lock_mesh_edit_fgp({}（参数透传）)  本地路由 /lock/mesh/edit/fgp（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_edit_fgp',
    method: 'POST',
    data: { ...params },
  })
