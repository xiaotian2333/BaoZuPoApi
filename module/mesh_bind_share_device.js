// Mesh组网-绑定共享设备
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mesh_bind_share_device
// 编程式：api.mesh_bind_share_device({}（参数透传）)  本地路由 /mesh/bind/share/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mesh_bind_share_device',
    method: 'POST',
    data: { ...params },
  })
