// Mesh组网-水表清除告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_water_clean
// 编程式：api.mesh_water_clean({}（参数透传）)  本地路由 /mesh/water/clean（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_water_clean',
    method: 'POST',
    data: { ...params },
  })
