// Mock.js的语法规范包括两部分：
//   1、数据模板定义规范，Date Template Definition,  DTD 
//   2、数据占位符定义规范，Date Placeholder Definition, DPD

// 属性名   name
// 生成规则 rule
// 属性值   value
// 'name|rule': value

// 注意：

// 属性名 和 生成规则 之间用竖线 | 分隔。
// 生成规则 是可选的。
// 生成规则 有 7 种格式：
// 'name|min-max': value
// 'name|count': value
// 'name|min-max.dmin-dmax': value
// 'name|min-max.dcount': value
// 'name|count.dmin-dmax': value
// 'name|count.dcount': value
// 'name|+step': value

// 生成规则 的 含义 需要依赖 属性值的类型 才能确定。
// 属性值 中可以含有 @占位符。
// 属性值 还指定了最终值的初始值和类型。

// 生成规则和示例：

var Mock = require('mockjs')
var data =  Mock.mock({
  // 字符串 String
    // 'str|1-3':'test' //>>>> test...
    // 'str|2':'test'  //>>>> testtest

  // 数字 Number
    // 'num|+1':1  //>>>> 1
    // 'num|2-561':123 //>>>> 23
    // 'num1|3-4.1-2':1, //>>>> 1
    // 'num2|3.1-2':1, //>>>> 1
    // 'num3|4.2':1, //>>>> 1

  // 布尔型 Boolean
  'name|1':true
    
})
console.log(JSON.stringify(data, null, 4))

// 1. 属性值是字符串 String

// 'name|min-max': string
// 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
// 'str|1-3':'test' //>>>> test...

// 'name|count': string
// 通过重复 string 生成一个字符串，重复次数等于 count。
// 'str|2':'test'  >>>>>>>>testtest


// 2. 属性值是数字 Number

// 'name|+1': number
// 属性值自动加 1，初始值为 number。

// 'name|min-max': number
// 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。

// 'name|min-max.dmin-dmax': number
// 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位


// 3. 属性值是布尔型 Boolean

// 'name|1': boolean
// 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

// 'name|min-max': value
// 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。