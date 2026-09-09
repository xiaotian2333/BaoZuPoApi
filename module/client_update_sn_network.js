// 更新SN网络配置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_update_sn_network/
// 编程式：api.client_update_sn_network({}（参数透传）)  本地路由 /client/update/sn/network（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_update_sn_network/',
    method: 'POST',
    data: { ...params },
  })
