// 删除门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_delete_lock_card/
// 编程式：api.client_delete_lock_card({}（参数透传）)  本地路由 /client/delete/lock/card（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_delete_lock_card/',
    method: 'POST',
    data: { ...params },
  })
