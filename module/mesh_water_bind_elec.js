// Mesh组网-水表绑定电表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_water_bind_elec
// 编程式：api.mesh_water_bind_elec({}（参数透传）)  本地路由 /mesh/water/bind/elec（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_water_bind_elec',
    method: 'POST',
    data: { ...params },
  })
