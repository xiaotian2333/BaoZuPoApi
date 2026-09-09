// Mesh门锁-编辑时段
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_edit_time_range
// 编程式：api.lock_mesh_edit_time_range({}（参数透传）)  本地路由 /lock/mesh/edit/time/range（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_edit_time_range',
    method: 'POST',
    data: { ...params },
  })
