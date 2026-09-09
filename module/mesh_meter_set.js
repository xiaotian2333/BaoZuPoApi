// Mesh组网-电表设置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_meter_set
// 编程式：api.mesh_meter_set({}（参数透传）)  本地路由 /mesh/meter/set（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_meter_set',
    method: 'POST',
    data: { ...params },
  })
