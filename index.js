function isValidIDCard (idNo) {
  // 不能用数字，有精度问题
  if (!idNo || typeof idNo !== 'string') return false
  idNo = idNo.trim()
  if (idNo.length !== 18) return false
  // 正则校验
  var rIdNo = /^(11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65)\d{4}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}[0-9xX]$/
  if (!rIdNo.test(idNo)) return false
  // 加权因子
  var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
  var nums = idNo.split('').map(str => +str.replace(/x/i, '10'))
  var numsWithWeight = nums.map((n, i) => n * weights[i])
  var sum = numsWithWeight.reduce((acc, cur) => acc + cur)
  return sum % 11 === 1
}

module.exports = isValidIDCard
