// 删除合同图片
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/delete_contract_imgs/
// 编程式：api.delete_contract_imgs({}（参数透传）)  本地路由 /delete/contract/imgs（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/delete_contract_imgs/',
    method: 'POST',
    data: { ...params },
  })
