// 电表设备信息查询：剩余电量 surplusValue、当前功率 multi_fun_info.power 等
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_device_info/
// 编程式：api.client_device_info({ sn })

module.exports = (params, createRequest) =>
  createRequest({
    url: '/v1/client/client_device_info/',
    method: 'POST',
    data: { sn: params.sn },
  })