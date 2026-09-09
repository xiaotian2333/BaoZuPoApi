// 主表配置校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/parent_meter_config_check/
// 编程式：api.parent_meter_config_check({}（参数透传）)  本地路由 /parent/meter/config/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/parent_meter_config_check/',
    method: 'POST',
    data: { ...params },
  })
