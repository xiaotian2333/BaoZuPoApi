// 删除门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_lock_card/
// 编程式：api.delete_lock_card({}（参数透传）)  本地路由 /delete/lock/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_lock_card/',
    method: 'POST',
    data: { ...params },
  })
