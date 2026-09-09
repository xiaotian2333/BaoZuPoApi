// 取消废弃
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/room/cancel_abandon/
// 编程式：api.cancel_abandon({}（参数透传）)  本地路由 /cancel/abandon（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/room/cancel_abandon/',
    method: 'POST',
    data: { ...params },
  })
