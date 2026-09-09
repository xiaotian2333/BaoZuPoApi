// 修改常开密码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/edit_common_password
// 编程式：api.edit_common_password({}（参数透传）)  本地路由 /edit/common/password（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/edit_common_password',
    method: 'POST',
    data: { ...params },
  })
