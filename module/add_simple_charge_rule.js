// 添加简易充电规则
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/add_simple_charge_rule/
// 编程式：api.add_simple_charge_rule({}（参数透传）)  本地路由 /add/simple/charge/rule（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/add_simple_charge_rule/',
    method: 'POST',
    data: { ...params },
  })
