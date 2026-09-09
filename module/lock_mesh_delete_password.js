// Mesh门锁-删除密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_delete_password
// 编程式：api.lock_mesh_delete_password({}（参数透传）)  本地路由 /lock/mesh/delete/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_delete_password',
    method: 'POST',
    data: { ...params },
  })
