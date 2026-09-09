// 扫码登录授权
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/qrcode_login_allow/
// 编程式：api.qrcode_login_allow({}（参数透传）)  本地路由 /qrcode/login/allow（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/qrcode_login_allow/',
    method: 'POST',
    data: { ...params },
  })
