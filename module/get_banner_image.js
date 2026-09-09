// 获取横幅图
// 云平台接口：GET https://bzp.iyunmu.com/bzp_backup/v1/admin/get_banner_image/
// 编程式：api.get_banner_image({}（参数透传）)  本地路由 /get/banner/image（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/get_banner_image/',
    method: 'GET',
    data: { ...params },
  })
