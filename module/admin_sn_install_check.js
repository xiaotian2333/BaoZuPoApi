// SN安装校验
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/admin/sn_install_check/
// 编程式：api.admin_sn_install_check({}（参数透传）)  本地路由 /admin/sn/install/check（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/admin/sn_install_check/',
    method: 'POST',
    data: { ...params },
  })
