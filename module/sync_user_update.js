// 同步用户权限更新
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_user_update
// 编程式：api.sync_user_update({}（参数透传）)  本地路由 /sync/user/update（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_user_update',
    method: 'POST',
    data: { ...params },
  })
