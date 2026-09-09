// 读取开锁记录
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/lock_read_open_record
// 编程式：api.lock_read_open_record({}（参数透传）)  本地路由 /lock/read/open/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/lock_read_open_record',
    method: 'POST',
    data: { ...params },
  })
