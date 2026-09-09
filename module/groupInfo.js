// 设备分组信息
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/device/groupInfo/
// 编程式：api.groupInfo({}（参数透传）)  本地路由 /groupInfo（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/device/groupInfo/',
    method: 'POST',
    data: { ...params },
  })
