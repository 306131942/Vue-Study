// # 安装
// npm install mockjs

// 本地安装
// 1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
// 2. 可以通过 require() 来引入本地安装的包。
// 全局安装
// 1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
// 2. 可以直接在命令行里使用。

var Mock = require('mockjs')
var data =  Mock.mock({
  // 属性list的值是一个数组对象(含有1-10个),
  'list|1-10':[{
    // 每个对象都是：有一个id的属性，值为数字
    'id|+1':1
  }]
})
console.log(JSON.stringify(data, null, 4))

// node 开始&安装.js