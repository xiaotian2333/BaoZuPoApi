// 远程读写指令：云端预生成抄表/控制指令（响应含后端签名与 timeStamp，用于二次下发设备）
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/ymSdk/remote_read_meter/
// 编程式：api.remote_read_meter({ sn, isPay: false })

module.exports = (params, createRequest) =>
  createRequest({
    url: '/ymSdk/remote_read_meter/',
    method: 'POST',
    data: { sn: params.sn, isPay: params.isPay ?? false },
  })