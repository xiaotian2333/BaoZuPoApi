// 租约确认
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/lease_confirm/
// 编程式：api.lease_confirm({}（参数透传）)  本地路由 /lease/confirm（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/lease_confirm/',
    method: 'POST',
    data: { ...params },
  })
