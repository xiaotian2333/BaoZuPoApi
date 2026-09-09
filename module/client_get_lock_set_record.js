// 门锁设置记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/client/client_get_lock_set_record/
// 编程式：api.client_get_lock_set_record({}（参数透传）)  本地路由 /client/get/lock/set/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_get_lock_set_record/',
    method: 'GET',
    data: { ...params },
  })
