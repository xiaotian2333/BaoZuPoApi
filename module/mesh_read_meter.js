// Mesh组网-电表抄读
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_read_meter
// 编程式：api.mesh_read_meter({}（参数透传）)  本地路由 /mesh/read/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_read_meter',
    method: 'POST',
    data: { ...params },
  })
