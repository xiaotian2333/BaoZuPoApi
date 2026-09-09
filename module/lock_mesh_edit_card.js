// Mesh门锁-编辑门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_mesh_edit_card
// 编程式：api.lock_mesh_edit_card({}（参数透传）)  本地路由 /lock/mesh/edit/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_mesh_edit_card',
    method: 'POST',
    data: { ...params },
  })
