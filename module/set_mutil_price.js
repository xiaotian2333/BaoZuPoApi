// 设置多费率价格
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/set_mutil_price
// 编程式：api.set_mutil_price({}（参数透传）)  本地路由 /set/mutil/price（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/set_mutil_price',
    method: 'POST',
    data: { ...params },
  })
