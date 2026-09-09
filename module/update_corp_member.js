// 更新企业成员
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/update_corp_member/
// 编程式：api.update_corp_member({}（参数透传）)  本地路由 /update/corp/member（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/update_corp_member/',
    method: 'POST',
    data: { ...params },
  })
