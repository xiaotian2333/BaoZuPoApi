// 时段门卡下发
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_card_time
// 编程式：api.lock_card_time({}（参数透传）)  本地路由 /lock/card/time（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_card_time',
    method: 'POST',
    data: { ...params },
  })
