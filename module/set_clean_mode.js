// 设置清表模式
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/set_clean_mode/
// 编程式：api.set_clean_mode({}（参数透传）)  本地路由 /set/clean/mode（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/set_clean_mode/',
    method: 'POST',
    data: { ...params },
  })
