// 修改钥匙时段
// 云平台接口：PUT https://bzp.iyunmu.com/bzp_backup/v1/admin/edit_key_time_range/
// 编程式：api.edit_key_time_range({}（参数透传）)  本地路由 /edit/key/time/range（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/edit_key_time_range/',
    method: 'PUT',
    data: { ...params },
  })
