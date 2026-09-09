// 删除开锁记录
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/delete_open_lock_record/
// 编程式：api.delete_open_lock_record({}（参数透传）)  本地路由 /delete/open/lock/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/delete_open_lock_record/',
    method: 'POST',
    data: { ...params },
  })
