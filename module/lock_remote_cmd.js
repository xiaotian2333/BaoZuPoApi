// 门锁远程指令
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/lock_remote_cmd/
// 编程式：api.lock_remote_cmd({}（参数透传）)  本地路由 /lock/remote/cmd（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/lock_remote_cmd/',
    method: 'POST',
    data: { ...params },
  })
