// Mesh门锁-删除门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_delete_card
// 编程式：api.lock_mesh_delete_card({}（参数透传）)  本地路由 /lock/mesh/delete/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_delete_card',
    method: 'POST',
    data: { ...params },
  })
