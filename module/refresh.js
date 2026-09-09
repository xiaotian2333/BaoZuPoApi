// 验证码刷新
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/web/captcha/refresh/
// 编程式：api.refresh({}（参数透传）)  本地路由 /refresh（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/web/captcha/refresh/',
    method: 'POST',
    data: { ...params },
  })
