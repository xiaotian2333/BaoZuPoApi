// 查询扫码登录信息
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/query_qrcode_login_info/
// 编程式：api.query_qrcode_login_info({}（参数透传）)  本地路由 /query/qrcode/login/info（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/query_qrcode_login_info/',
    method: 'POST',
    data: { ...params },
  })
