// 获取登录二维码
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/getLoginQrcode/
// 编程式：api.getLoginQrcode({}（参数透传）)  本地路由 /getLoginQrcode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/getLoginQrcode/',
    method: 'GET',
    data: { ...params },
  })
