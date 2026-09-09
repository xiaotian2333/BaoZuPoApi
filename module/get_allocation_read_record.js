// 分配抄表记录
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_allocation_read_record/
// 编程式：api.get_allocation_read_record({}（参数透传）)  本地路由 /get/allocation/read/record（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_allocation_read_record/',
    method: 'GET',
    data: { ...params },
  })
