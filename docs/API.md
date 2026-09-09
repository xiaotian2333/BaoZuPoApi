# BaoZuPoApi 接口文档

## 1. 项目说明

`BaoZuPoApi` 是对包租婆管家微信小程序后端接口的**模型式可插拔封装**。

- `module/*.js` 一个文件对应一个接口，放入即自动注册，无需改动其他配置
- 请求自动完成包租婆管家微信小程序后端 `ciphertext` 加解密（AES-256-CBC + 交错 IV，调用方零感知）
- 支持 **HTTP 调用** 与 **编程式调用** 两种方式

### 快速开始

```bash
pnpm install          # 安装依赖（express / axios / dotenv）
pnpm start            # 启动 HTTP 服务，默认 http://localhost:7860
```

### 通用请求约定

| 项目 | 说明 |
|---|---|
| 本地服务端口 | `7860`（可用环境变量 `PORT` 覆盖） |
| 认证凭据 | 默认读取 `.env` 的 `CSRF_TOKEN` / `USERID`；Http 请求可传 `csrfToken` / `userid` 参数覆盖 |
| 对外路由 | 由模块文件名生成：下划线 `_` 转 `/`（`client_device_info.js` → `/client/device/info`）；`_` 前缀文件为内部模块不注册 |
| HTTP 方法 | 路由同时接受 `GET` / `POST`，参数从 query 与 JSON body 合并 |
| 返回结构 | `{ headers, status, body }`；`body` 为云平台明文壳 `{ code, data, msg, status }`，其中 `data` 已由本项目自动解密 |

> 注意：`.env` 中的 `CSRF_TOKEN` / `USERID` 来自抓包，过期后会返回 `403/401`，请更新该值或按请求覆盖。

## 2. 接口总览

| 模块文件 | 本地路由 | 云端接口 | 用途 |
|---|---|---|---|
| `client_device_info.js` | `/client/device/info` | `POST /v1/client/client_device_info/` | 电表设备信息（剩余电量、当前功率等） |
| `client_link_device.js` | `/client/link/device` | `POST /v1/client/client_link_device/` | 联动/关联设备列表 |
| `check_error_pay.js` | `/check/error/pay` | `POST /v1/client/check_error_pay/` | 支付状态校验 |
| `remote_read_meter.js` | `/remote/read/meter` | `POST /ymSdk/remote_read_meter/` | 云端预生成远程读写指令 |

---

## 3. 接口详情

### 3.1 电表设备信息

> 查询电表当前状态：剩余电量/金额、当前电压电流功率、开关状态、型号费率等。

**云端接口**：`POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_device_info/`

**HTTP 调用**

```
POST http://localhost:7860/client/device/info
Content-Type: application/json
```

请求体：

```json
{
  "sn": "xxx"
}
```

**编程式调用**

```js
const api = require("../main")
const res = await api.client_device_info({ sn: "xxx" })
// res.body.data 即如下响应数据
```

**请求参数**

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `sn` | string | 是 | 电表序列号 |

**响应数据**（`body.data`，抓包还原真实样例）

```json
{
  "id": 1000000,
  "sn": "xxx",
  "totalValue": 100.5,
  "surplusValue": 88.5, // 该值可能出现负数
  "unitPrice": 1.0,
  "slave_count": null,
  "is_ct": false,
  "protocols": "BCE",
  "multi_rate": false,
  "product": "电表",
  "parentMeter": null,
  "dev_on_icon": "https://b.iyunmu.com/oss/图床/xxx.png",
  "dev_off_icon": "https://b.iyunmu.com/oss/图床/xxx.png",
  "name": "电表名称",
  "signal_lvl": 4,
  "basisPrice": 0.6,
  "pay_enable": true,
  "multi_fun": true,
  "multiple": 1,
  "is_abc": false,
  "battery": false,
  "stateOf": false,
  "ifnError": false,
  "switchStatus": 0,
  "read_time": "01月01日 00:00",
  "pay_limit": 10,
  "dev_type": "YM-M4-BCE-01",
  "dev_name_format": "4G双模预付费多功能表",
  "localPayment": false,
  "poundageWay": true,
  "third_pay": 0,
  "elec_rate": 0,
  "reset_flag": false,
  "lock": false,
  "wx_fee": 0.005,
  "icbc_fee": 0.005,
  "zfb_fee": 0.005,
  "icbc_state": false,
  "bank_type": 4,
  "wallet": 0,
  "order_id": 0,
  "force_flag": null,
  "no_read_day": 0,
  "room_id": null,
  "multi_fun_abc_info": null,
  "multi_fun_info": {
    "voltage": 239,
    "current": 0.031,
    "power": 0,
    "reactive_power": 0,
    "pf": 0,
    "frequency": 50
  },
  "collector": null,
  "mesh": null,
  "lock_update": false,
  "fgp_enable": null,
  "public_count": 0,
  "is_share": false,
  "checkout": false,
  "consumer": null,
  "is_remote_public": false,
  "charge_bill": null,
  "water_digits": null,
  "b_ver": 2,
  "is_error": 0,
  "link_query": false,
  "upgrade_flag": false,
  "address_check": false,
  "is_tmp": false,
  "tmp_name": null,
  "lock_user_date_range": null,
  "payee": "收款方名称",
  "pay_ver": 1
}
```

**关键字段说明**

| 字段 | 说明 |
|---|---|
| `totalValue` | 总电量/总金额 |
| `surplusValue` | **剩余金额/剩余电量**（与 `unitPrice` 搭配换算） |
| `unitPrice` | 单价（元） |
| `basisPrice` | 基础电价（元） |
| `switchStatus` | 开关状态（`0`=合闸 off / 其他状态请按业务确认） |
| `read_time` | 最近抄表时间 |
| `multi_fun_info.power` | **当前功率**（W） |
| `multi_fun_info.voltage` | 当前电压（V） |
| `multi_fun_info.current` | 当前电流（A） |
| `multi_fun_info.frequency` | 频率（Hz） |
| `multi_fun_info.pf` | 功率因数 |
| `multi_fun_info.reactive_power` | 无功功率 |
| `pay_enable` | 是否支持在线缴费 |
| `pay_limit` | 充值/欠费阈值 |
| `payee` | 收款方 |
| `wx_fee`/`icbc_fee`/`zfb_fee` | 微信/工行/支付宝 手续费率 |
| `dev_type` / `dev_name_format` | 设备型号 / 型号中文名 |
| `name` | 电表安装位置名称 |

---

### 3.2 联动设备列表

> 查询与该电表绑定的联动/关联设备设备列表。

**云端接口**：`POST https://bzp.iyunmu.com/bzp_backup/v1/client/client_link_device/`

**HTTP 调用**

```
POST http://localhost:7860/client/link/device
Content-Type: application/json
```

请求体：

```json
{
  "sn": "xxx"
}
```

**编程式调用**

```js
const api = require("../main")
const res = await api.client_link_device({ sn: "xxx" })
```

**请求参数**

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `sn` | string | 是 | 电表序列号 |

**响应数据**（`body.data`，抓包还原真实样例）

```json
{
  "link_device_list": []
}
```

| 字段 | 说明 |
|---|---|
| `link_device_list` | 联动设备数组；元素包含设备 `sn`、类型等信息（当前示例为空列表） |

---

### 3.3 支付状态校验

> 校验电表是否存在错误支付/待处理支付（如断电未扣费、充值异常）。

**云端接口**：`POST https://bzp.iyunmu.com/bzp_backup/v1/client/check_error_pay/`

> 说明：该接口**响应为明文**（不返回 `ciphertext`），请求体仍加密。

**HTTP 调用**

```
POST http://localhost:7860/check/error/pay
Content-Type: application/json
```

请求体：

```json
{
  "sn": "xxx"
}
```

**编程式调用**

```js
const api = require("../main")
const res = await api.check_error_pay({ sn: "xxx" })
```

**请求参数**

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `sn` | string | 是 | 电表序列号 |

**响应数据**（`body`，抓包还原真实样例，未包 `data.ciphertext`）

```json
{
  "code": 200,
  "data": {
    "again_pay_info": {},
    "Blaze": false
  },
  "msg": "success",
  "status": "success"
}
```

| 字段 | 说明 |
|---|---|
| `data.again_pay_info` | 待处理支付信息（为空对象表示无） |
| `data.Blaze` | 是否存在熔断/异常标记 |

---

### 3.4 远程读写指令

> 云端预生成一条抄表/控制指令（含后端签名与时间戳），应用据此通过 SDK 二次下发给设备。

**云端接口**：`POST https://bzp.iyunmu.com/bzp_backup/ymSdk/remote_read_meter/`

**HTTP 调用**

```
POST http://localhost:7860/remote/read/meter
Content-Type: application/json
```

请求体：

```json
{
  "sn": "xxx",
  "isPay": false
}
```

**编程式调用**

```js
const api = require("../main")
const res = await api.remote_read_meter({ sn: "xxx", isPay: false })
```

**请求参数**

| 参数 | 类型 | 必填 | 缺省 | 说明 |
|---|---|---|---|---|
| `sn` | string | 是 | - | 电表序列号 |
| `isPay` | boolean | 否 | `false` | 是否为支付类指令 |

**响应数据**（`body.data`，抓包还原真实样例）

```json
{
  "sn": "xxx",
  "cmdType": "8016",
  "ver": "1",
  "params": {
    "cmd": "1"
  },
  "callback": "http://<device_host>:7000/ymSdk/remote_read_meter_back/xxx",
  "sign": "xxx",
  "access_key": "xxx",
  "timeStamp": 1750000000
}
```

| 字段 | 说明 |
|---|---|
| `cmdType` | 指令类型（`8016` 为抄表类） |
| `ver` | 协议版本 |
| `params` | 指令参数（`cmd: "1"` 抄读状态） |
| `callback` | 指令执行结果的回调地址 |
| `sign` | 后端签名（下发设备时需携带） |
| `access_key` | 通道访问密钥（下发设备时需携带） |
| `timeStamp` | 指令生成时间戳（单位秒，透传时建议作为设备侧校验） |

> 下发设备侧为另一套加密体系（mqtt 平台 `aep_command_v1`，密钥由用户名/密码/SN/时间戳派生），不在本仓库 HTTP 接口范围内。

---

## 4. 认证覆盖

默认凭据来自 `.env`，可按请求/按调用覆盖：

**HTTP 方式**（query 或 body）

```
POST http://localhost:7860/client/device/info?csrfToken=<你的CSRF>&userid=<你的userid>
```

**编程式方式**

```js
await api.client_device_info({ sn, csrfToken: "xxx", userid: "xxx" })
// 或
await api.client_device_info({ sn, auth: { csrfToken: "xxx", userid: "xxx" } })
```

## 5. 新增接口

复制 `module/_template.js` 为你的接口文件（例如 `my_read.js`），修改云端路径与业务参数即可，自动注册为 `/my/read` 路由并出现在编程式 `api` 对象中，无需改动任何框架代码。