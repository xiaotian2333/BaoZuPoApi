// 新模块模板：复制本文件改为你的接口名（去掉 _ 开头前缀），修改 url 与参数即可
// 文件名即对外路由：如 my_api.js → GET/POST /my/api
// 编程式调用：api.my_api(data)

module.exports = (params, createRequest) =>
  createRequest({
    url: '/你的/接口/路径/',
    method: 'POST',
    data: {
      // 从 params 取值，示例：
      serial: params.serial,
    },
    // auth: { csrfToken, userid }  // 需要时可按模块覆盖认证
    // noEncrypt: true             // 该接口请求体不加密时开启
  })