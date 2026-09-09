// Mesh组网-电表强制断电
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_meter_force
// 编程式：api.mesh_meter_force({}（参数透传）)  本地路由 /mesh/meter/force（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_meter_force',
    method: 'POST',
    data: { ...params },
  })
