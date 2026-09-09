// 简易充电规则列表
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_simple_charge_rule_list/
// 编程式：api.get_simple_charge_rule_list({}（参数透传）)  本地路由 /get/simple/charge/rule/list（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_simple_charge_rule_list/',
    method: 'GET',
    data: { ...params },
  })
