// 升级结果
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/upgrade_result/
// 编程式：api.upgrade_result({}（参数透传）)  本地路由 /upgrade/result（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/upgrade_result/',
    method: 'POST',
    data: { ...params },
  })
