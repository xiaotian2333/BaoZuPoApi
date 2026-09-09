// 指纹录入结果查询
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/fgp_get_result
// 编程式：api.fgp_get_result({}（参数透传）)  本地路由 /fgp/get/result（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/fgp_get_result',
    method: 'POST',
    data: { ...params },
  })
