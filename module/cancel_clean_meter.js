// 取消清表
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/cancel_clean_meter/
// 编程式：api.cancel_clean_meter({}（参数透传）)  本地路由 /cancel/clean/meter（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/cancel_clean_meter/',
    method: 'POST',
    data: { ...params },
  })
