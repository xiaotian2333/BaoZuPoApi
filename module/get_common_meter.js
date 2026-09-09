// 常开电表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_common_meter/
// 编程式：api.get_common_meter({}（参数透传）)  本地路由 /get/common/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_common_meter/',
    method: 'POST',
    data: { ...params },
  })
