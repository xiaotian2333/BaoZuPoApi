// 更新用户地址
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_user_address/
// 编程式：api.update_user_address({}（参数透传）)  本地路由 /update/user/address（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_user_address/',
    method: 'POST',
    data: { ...params },
  })
