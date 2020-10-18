# 目录结构


* __front-end__ 前端Vue项目
* __src__ 服务器端Web项目(Express)

## 依赖

* `cheerio`: 解析HTML


## 说明

删除 `package.json` 文件, 执行 `init.cmd` 可重新初始化项目.

* `npx ts-node src/main.ts web 8083 --enable-ws --ws-path='/ws'` 启动Web服务
* `cd front-end && npm run serve` 运行前端
* `cd front-end && npm run build` 编译前端代码到 `public` 目录