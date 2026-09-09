// 合同图片
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/room/get_contract_imgs/
// 编程式：api.get_contract_imgs({}（参数透传）)  本地路由 /get/contract/imgs（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/get_contract_imgs/',
    method: 'GET',
    data: { ...params },
  })
