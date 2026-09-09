// 水表指令等待状态
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/water_wait_cmd
// 编程式：api.water_wait_cmd({}（参数透传）)  本地路由 /water/wait/cmd（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/water_wait_cmd',
    method: 'POST',
    data: { ...params },
  })
