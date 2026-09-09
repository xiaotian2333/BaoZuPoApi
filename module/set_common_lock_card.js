// 设置常开门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/set_common_lock_card
// 编程式：api.set_common_lock_card({}（参数透传）)  本地路由 /set/common/lock/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/set_common_lock_card',
    method: 'POST',
    data: { ...params },
  })
