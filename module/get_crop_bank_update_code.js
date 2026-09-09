// 企业修改验证码
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/get_crop_bank_update_code/
// 编程式：api.get_crop_bank_update_code({}（参数透传）)  本地路由 /get/crop/bank/update/code（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/get_crop_bank_update_code/',
    method: 'POST',
    data: { ...params },
  })
