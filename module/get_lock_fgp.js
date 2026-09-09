// 获取指纹
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_lock_fgp/
// 编程式：api.get_lock_fgp({}（参数透传）)  本地路由 /get/lock/fgp（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_lock_fgp/',
    method: 'GET',
    data: { ...params },
  })
