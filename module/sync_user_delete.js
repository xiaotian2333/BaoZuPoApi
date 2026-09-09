// 同步删除用户
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_user_delete
// 编程式：api.sync_user_delete({}（参数透传）)  本地路由 /sync/user/delete（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_user_delete',
    method: 'POST',
    data: { ...params },
  })
