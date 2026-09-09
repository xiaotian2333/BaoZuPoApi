// 获取union_id
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/get_union_id/
// 编程式：api.get_union_id({}（参数透传）)  本地路由 /get/union/id（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/get_union_id/',
    method: 'POST',
    data: { ...params },
  })
