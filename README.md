# is-valid-id-card
一个校验身份证号是否符合规则的方法。(A function to test if a Chinese ID card is valid.)   
校验身份证是否符合标准   
参考国家标准:[GB 11643-1999](http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E)，只有18位身份证才符合标准   
参考了此文章：https://blog.csdn.net/qq_41589580/article/details/81040772   
暂时未做每月不同天数及闰年的校验，如生日是2月31号也返回true。今后有空可能会加上此校验。    
注意：身份证号符合规则，只是该身份证号符合国家标准中的规则，并不意味着该身份证号真实存在。

## Installation
```
npm install is-valid-id-card --save
```

## Examples
```
const isValidIDCard = require('is-valid-id-card')
console.log(isValidIDCard('')) // false
console.log(isValidIDCard('123456')) // false 
console.log(isValidIDCard('11012119880808223x')) // true
```