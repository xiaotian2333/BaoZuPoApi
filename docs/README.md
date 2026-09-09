# BaoZuPoApi — 包租婆云平台接口封装

对 `https://bzp.iyunmu.com/bzp_backup` 的逆向接口封装。本体是一个**本地 HTTP 服务**，同时暴露 **编程式 SDK**（`api.<函数名>`）。

## 快速开始

```bash
pnpm install     # 依赖：axios、express、jsonwebtoken、crypto 等
pnpm start       # 默认监听 7860 端口
curl 'http://127.0.0.1:7860/client/device/info' -H 'Content-Type: application/json' \
  -d '{"sn":"设备SN"}'
```

## 文档导航

文档按**设备维度**分文件（模块代码统一放 `module/`，文档仅做归类导航）：

| 文档 | 内容 | 数量 |
|---|---|---|
| [通用](./通用.md) | 跨设备通用业务：账户/登录/银行卡、公告/合同/租约/转账、房间管理、管理端账号权限、扫码登录、宝付支付，以及**计费业务（充值/账单/余额/抄表记录，水电共用）** | 170 |
| [电表](./电表.md) | **电量计费表**专用：`/ymSdk` 远程指令（含多费率、共享/从表、集抄、Mesh）+ 电表信息 + 电价模板 | 77 |
| [水表](./水表.md) | **水表**专用：远程水表充值/断电/清警、Mesh 水表、母表绑定 | 10 |
| [门锁](./门锁.md) | **门锁**专用：写卡/指纹/密码/同步/集中器下行 + 门卡指纹 + 门锁管理 | 122 |
| [插座](./插座.md) | **插座**专用：智能插座/公共插座/从表插座/网关 | 15 |
| [蓝牙](./蓝牙.md) | **蓝牙**专用：邻近 BLE/扫码蓝牙/蓝牙钥匙 | 9 |
| [其他设备](./其他设备.md) | 集抄网关管理 + Mesh 组网 + 充电（电瓶车充电桩）服务 | 19 |

**共 422 个模块接口**，按模块头注释自动分类生成。

## 调用方式

### 1. 本地 HTTP 服务（默认）

每个模块自动注册一条路由：**`/` + 模块文件名，下划线转斜杠**（如 `client_device_info.js` → `POST /client/device/info`）。
配置见 `.env`：

```env
BZP_AUTH_MODE=header   # header | query | plaintext
BZP_HTTP_PORT=7860     # 本地服务端口
```

认证头会由服务端自动补齐（CSRF / userid / mappId / token / roleId），业务参数只需传业务字段。

### 2. 编程式（Node 内嵌）

```js
const api = require('./main')
await api.client_device_info({ sn: '设备SN' })
await api.remote_read_meter({ sn: '设备SN', isPay: false })
```

### 3. 参数透传

大部分新增模块为**参数透传**：`createRequest({ data: { ...params } })`，调用时按云端字段名直接传入即可。
四个已抓包验证的模块（`remote_read_meter` / `client_device_info` / `client_link_device` / `check_error_pay`）保留精修实现。

## 请求约定（逆向结论）

- **加解密**：业务参数默认经 AES-256-CBC（密钥来自登录接口）加密为 `ciphertext` 字段；密钥/偏移为登录响应每字符交织生成（详见 `util/crypto.js`）。
- **GET 与 POST**：云端 `GET` 接口参数走 **query**（明文），写操作走 **ciphertext body**；本封装已在 `util/request.js` 中按 `method` 自动分流（GET → `params`）。
- **鉴权**：云端只看 `userid`；未授权返回 `{ code: 401, msg: '用户不存在' }`（HTTP 200）。
- **URL 形态**：`/ymSdk/<指令>` **无尾斜杠**；`/v1/client|room|admin|adapay/<func>/` **带尾斜杠**；`/device/*`、`/safe/*` 无尾斜杠。各模块已按正确形态填写。
- **回调**：`remote_*` 指令响应含 `callback` 地址，指令执行结果由云端回调（非本次 HTTP 调用返回）。

## 目录结构

```
module/            # 422 个接口模块（每个文件 = 1 个云端接口）
util/              # request.js 认证与加解密、crypto.js 算法
server.js          # 本地 HTTP 服务 + 模块路由自动注册
main.js            # 编程式 SDK 入口
docs/              # 本文档
```

## 补充还原资料

- 逆向数据源：`A:\Desktop\1\app-service.js`
- 接口注册骨架：`remoteApis`（27 项）、`collectorApis`、`meshApis`、`simpleChargeApis`、`clientApis`、`roomApis`（模块 `a337` 等）
- `remote_pay`（刷卡支付）为 **MQTT 指令**（`ymNetSend({cmd:'meter_remote_pay', sn, data})`），非 HTTP，未建模块。
- 电表喵 App 侧登录后由独立接口 `/safe/api/pay/get_safe_mode/` 返回支付安全模式（见 [通用](./通用.md) §4.2）。