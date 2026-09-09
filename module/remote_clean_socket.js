// 远程插座指令-清除告警
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/remote_clean_socket
// 编程式：api.remote_clean_socket({}（参数透传）)  本地路由 /remote/clean/socket（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/remote_clean_socket',
    method: 'POST',
    data: { ...params },
  })
