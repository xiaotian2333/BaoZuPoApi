// 取组设备
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_group_device/
// 编程式：api.get_group_device({}（参数透传）)  本地路由 /get/group/device（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_group_device/',
    method: 'GET',
    data: { ...params },
  })
