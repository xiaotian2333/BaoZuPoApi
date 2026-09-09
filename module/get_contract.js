// 获取合同
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/get_contract/
// 编程式：api.get_contract({}（参数透传）)  本地路由 /get/contract（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_contract/',
    method: 'POST',
    data: { ...params },
  })
