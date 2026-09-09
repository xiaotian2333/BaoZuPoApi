// 租约确认短信
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/lease_confirm_sms/
// 编程式：api.lease_confirm_sms({}（参数透传）)  本地路由 /lease/confirm/sms（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/lease_confirm_sms/',
    method: 'POST',
    data: { ...params },
  })
