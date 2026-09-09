// 设置门锁用户时段
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_lock_user_date_range/
// 编程式：api.set_lock_user_date_range({}（参数透传）)  本地路由 /set/lock/user/date/range（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_lock_user_date_range/',
    method: 'POST',
    data: { ...params },
  })
