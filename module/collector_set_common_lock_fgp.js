// 集中器下行-设置常开指纹
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/collector_set_common_lock_fgp
// 编程式：api.collector_set_common_lock_fgp({}（参数透传）)  本地路由 /collector/set/common/lock/fgp（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/collector_set_common_lock_fgp',
    method: 'POST',
    data: { ...params },
  })
