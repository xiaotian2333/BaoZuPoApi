// 母表水表配置
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/mother_water_config
// 编程式：api.mother_water_config({}（参数透传）)  本地路由 /mother/water/config（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/mother_water_config',
    method: 'POST',
    data: { ...params },
  })
