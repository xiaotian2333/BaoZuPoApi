// 修改设备共享模板
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_device_share_template/
// 编程式：api.edit_device_share_template({}（参数透传）)  本地路由 /edit/device/share/template（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_device_share_template/',
    method: 'PUT',
    data: { ...params },
  })
