// 管理员卡写卡回执
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/write_lock_admin_card_back/
// 编程式：api.write_lock_admin_card_back({}（参数透传）)  本地路由 /write/lock/admin/card/back（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/write_lock_admin_card_back/',
    method: 'POST',
    data: { ...params },
  })
