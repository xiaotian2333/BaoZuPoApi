// 修改临时设备名称
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_edit_tmp_name/
// 编程式：api.client_edit_tmp_name({}（参数透传）)  本地路由 /client/edit/tmp/name（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_edit_tmp_name/',
    method: 'POST',
    data: { ...params },
  })
