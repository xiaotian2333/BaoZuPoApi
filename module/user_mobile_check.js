// 用户手机号校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/user_mobile_check/
// 编程式：api.user_mobile_check({}（参数透传）)  本地路由 /user/mobile/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/user_mobile_check/',
    method: 'POST',
    data: { ...params },
  })
