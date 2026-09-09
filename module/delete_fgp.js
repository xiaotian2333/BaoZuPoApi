// 删除指纹
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_fgp/
// 编程式：api.delete_fgp({}（参数透传）)  本地路由 /delete/fgp（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_fgp/',
    method: 'POST',
    data: { ...params },
  })
