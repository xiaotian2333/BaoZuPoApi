// 获取微信手机号
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/get_wx_phone/
// 编程式：api.get_wx_phone({}（参数透传）)  本地路由 /get/wx/phone（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_wx_phone/',
    method: 'POST',
    data: { ...params },
  })
