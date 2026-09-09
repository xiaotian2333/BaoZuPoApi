// 同步用户门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/sync_user_card
// 编程式：api.sync_user_card({}（参数透传）)  本地路由 /sync/user/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/sync_user_card',
    method: 'POST',
    data: { ...params },
  })
