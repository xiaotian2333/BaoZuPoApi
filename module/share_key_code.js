// 共享钥匙码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/share_key_code/
// 编程式：api.share_key_code({}（参数透传）)  本地路由 /share/key/code（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/share_key_code/',
    method: 'POST',
    data: { ...params },
  })
