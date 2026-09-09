// 创建企业成员
// 云平台接口：POST https://bzp.iyunmu.com/bzp_backup/adapay/create_corp_member/
// 编程式：api.create_corp_member({}（参数透传）)  本地路由 /create/corp/member（仅本地服务，云端路径见上）

module.exports = (params, createRequest) =>
  createRequest({
    url: '/adapay/create_corp_member/',
    method: 'POST',
    data: { ...params },
  })
