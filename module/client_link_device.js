// 联动设备列表查询
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_link_device/
// 编程式：api.client_link_device({ sn })

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_link_device/',
    method: 'POST',
    data: { sn: params.sn },
  })