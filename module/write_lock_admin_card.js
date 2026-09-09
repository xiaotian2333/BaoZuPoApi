// 写管理员门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/write_lock_admin_card
// 编程式：api.write_lock_admin_card({}（参数透传）)  本地路由 /write/lock/admin/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/write_lock_admin_card',
    method: 'POST',
    data: { ...params },
  })
