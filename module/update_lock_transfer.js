// 更新门锁转移
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/update_lock_transfer/
// 编程式：api.update_lock_transfer({}（参数透传）)  本地路由 /update/lock/transfer（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/update_lock_transfer/',
    method: 'POST',
    data: { ...params },
  })
