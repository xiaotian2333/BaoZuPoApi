// 指纹录入事件
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/fgp_set_event
// 编程式：api.fgp_set_event({}（参数透传）)  本地路由 /fgp/set/event（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/fgp_set_event',
    method: 'POST',
    data: { ...params },
  })
