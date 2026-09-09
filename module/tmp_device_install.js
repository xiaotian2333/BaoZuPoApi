// 临时设备安装
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/tmp_device_install/
// 编程式：api.tmp_device_install({}（参数透传）)  本地路由 /tmp/device/install（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/tmp_device_install/',
    method: 'POST',
    data: { ...params },
  })
