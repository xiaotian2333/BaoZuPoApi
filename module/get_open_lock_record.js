// 开锁记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_open_lock_record/
// 编程式：api.get_open_lock_record({}（参数透传）)  本地路由 /get/open/lock/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_open_lock_record/',
    method: 'GET',
    data: { ...params },
  })
