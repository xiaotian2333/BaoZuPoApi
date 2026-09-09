// 绑定门卡
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_bind_card_code/
// 编程式：api.client_bind_card_code({}（参数透传）)  本地路由 /client/bind/card/code（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_bind_card_code/',
    method: 'POST',
    data: { ...params },
  })
