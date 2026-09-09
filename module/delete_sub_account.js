// 删除子账号
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_sub_account/
// 编程式：api.delete_sub_account({}（参数透传）)  本地路由 /delete/sub/account（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_sub_account/',
    method: 'POST',
    data: { ...params },
  })
