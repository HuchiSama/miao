
var huchisama = {

  /**
   * 判断是否是Null
   * @param {*} value 
   */
  isNull: function (value) {
    return (value === null) ? true : false
  },
  /**
   * 判断是否是NaN
   * @param {*} value 
   */
  isNaN: function (value) {
    if (typeof (value) == "object") {
      value = + String(value)
    }
    return (value !== value) ? true : false
  },
  /**
   * 这个方法返回它接收到的第一个参数
   * @param {*} value 任意值
   */
  identity: function (value) {
    return arguments[0]
  },

  /**
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
   * @param {*} array 传入数组
   * @param {*} size  指定数组截取长度
   */
  chunk: function (array, size = 1) {
    let arr = array.slice(0)
    let count = []
    for (let i = size; i <= arr.length; i = size) {
      count.push(arr.splice(0, i))
    }
    if (arr.length !== 0) {
      count.push(arr)
    }
    return count
  },
  /**
   * 找出传入数组中所有 非False 的值，并返回到新数组
   * @param {*} array 传入数组
   */
  compact: function (array) {
    let count = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        count.push(array[i])
      }
    }
    return count
  },

  /**
   * 将array 与 任何其他 值 连接起来，并返回新数组
   * @param {*} array 被连接的数组
   * @param  {...any} values 需要连接上去的值
   */
  concat: function (array, ...values) {
    return count = array.concat(...values)
  },
  /**
   * 将 values 里面包含的值 从array里面排除出去，并返回新数组
   * @param {*} array 传入要检查的数组
   * @param  {...any} values 对照需要排除的值
   */
  difference: function (array, ...values) {
    let map = {}
    let count = []
    let index = 1
    while (index < arguments.length) {
      for (let i = 0; i < arguments[index].length; i++) {
        if (!(arguments[index][i] in map)) {
          map[arguments[index][i]] = 1
        }
      }
      index++
    }
    for (let j = 0; j < array.length; j++) {
      if (!(array[j] in map)) {
        count.push(array[j])
      }
    }
    return count
  },
  /**
   * 从数组 前面 切下N长度，并返回剩余切片
   * 
   * @param {*} array 需要切片的数组
   * @param {*} n 需要切下的长度
   */
  drop: function (array, n = 1) {
    return array.slice(n)
  },

  /**
   * 从数组 尾部 切下N长度，并返回剩余切片
   * 
   * @param {*} array 需要切片的数组
   * @param {*} n 需要切下的长度
   */
  dropRight: function (array, n = 1) {
    if (n == 0) {
      return array
    }
    return array.slice(0, -n)
  },

  /**
   * 使用value值来填充（替换）array，从start开始到end（不包含），返回数组（不是创建新数组）
   * @param {*} array 要填充改变的数组
   * @param {*} value 要填充给array的值
   * @param {*} start 填充开始位置
   * @param {*} end 填充结束位置（不包含）
   */
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  /**
   * 获取数组第一位
   * @param {*} array 
   */
  head: function (array) {
    return array[0]
  },

  /**
   * 减少一级array数组的嵌套层级
   * @param {*} array 输入多维数组
   */
  flatten: function (array) {
    let org = []
    for (let i = 0; i < array.length; i++) {
      org = org.concat(array[i])
    }
    return org
  },

  /**
   * 获取数组中从fromIndex开始 第一次出现值时所在的索引，如果formIndex为负数 则表示结尾往开始的偏移
   * @param {*} array 需要检索的数组
   * @param {*} value 需要检索到的值
   * @param {*} fromIndex 检索开始的位置
   */
  indexOf: function (array, value, fromIndex = 0) {
    let len = array.length
    if (fromIndex < 0 && -fromIndex <= len) {
      fromIndex = len - fromIndex
    } else if (-fromIndex > len) {
      fromIndex = 0
    }
    for (let i = fromIndex; i < len; i++) {
      if (array[i] == value) {
        return i
      } else if (array[i] !== array[i] && value !== value) {
        return i
      }
    }
    return -1
  },

  /**
   * 返回 除最后一位 的数组切片
   * @param {*} array 
   */
  initial: function (array) {
    return array.slice(0, array.length - 1)
  },

  /**
   * 找出输入的所有数组的交集 
   * @param  {...any} arrays 待检查的数据
   */
  intersection: function (...arrays) {
    let map = {}
    let j = 0
    let org = []
    while (j < arguments.length) {
      for (let i of arguments[j]) {
        if (i in map) {
          map[i] += 1
        } else {
          map[i] = 1
        }
      }
      j++
    }
    let len = arguments.length
    for (let k in map) {
      if (map[k] == len) {
        org.push(+k)
      }
    }
    return org
  },

  /**
   * 把数组以separator连接成字符串并返回
   * @param {*} array 数组
   * @param {*} separator 中间连接符
   */
  join: function (array, separator = ",") {
    let str = ""
    for (let i of array) {
      str = str + i + separator
    }
    return str.slice(0, str.length - 1)
  },

  /**
   * 返回数组最后一位
   * @param {*} array 数组
   */
  last: function (array) {
    return array[array.length - 1]
  },

  /**
   * 获取数组中从fromIndex开始 往左遍历 第一次出现值时所在的索引，如果formIndex为负数 则表示结尾往开始的偏移
   * @param {*} array 需遍历的数组
   * @param {*} value 需查找的值
   * @param {*} fromIndex 开始查找的下标
   */
  lastIndexOf: function (array, value, fromIndex = length - 1) {
    let len = array.length
    if (fromIndex < 0 && -fromIndex <= len) {
      fromIndex = len - fromIndex
    } else if (-fromIndex > len) {
      return -1
    }
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      } else if (array[i] !== array[i] && value !== value) {
        return i
      }
    }
    return -1
  },

  /**
   * 返回数组第N位，如果 n < 0 则从结尾开始往左第N位
   * @param {*} array 数组
   * @param {*} n 索引
   */
  nth: function (array, n = 0) {
    if (n < 0) {
      return array[array.length + n]
    } else {
      return array[n]
    }
  },

  /**
   * 移除数组中的values的值，并返回 修改后 的数组
   * @param {*} array 需要修改的数组
   * @param  {...any} values 需要从数组删去的值
   */
  pull: function (array, ...values) {
    let j = 1
    while (j < arguments.length) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == arguments[j]) {
          array.splice(i, 1)
        }
      }
      j++
    }
    return array
  },

  /**
  * 移除数组中的values的值，并返回 修改后 的数组
  * @param {*} array 需要修改的数组
  * @param  {array} value 需要从数组删去的值组成的数组
  */
  pullAll: function (array, value) {
    let map = {}
    for (let j of value) {
      map[j] = 1
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] in map) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  },

  /**
   * 根据索引，移除数组中对应的值，并返回被移除数组组成的新数组
   * 原数组也会被改变
   * @param {*} array 要修改的数组
   * @param  {...any} indexes 要移除值的索引
   */
  pullAt: function (array, ...indexes) {
    let org = []
    for (let j of indexes) {
      org.push(array[j])
    }
    this.pullAll(array, org)
    return org
  },

  /**
   * 反转数组，会修改原数组
   * @param {*} array 要反转的数组
   */
  reverse: function (array) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
      let tem
      tem = array[end]
      array[end] = array[start]
      array[start] = tem
      start++
      end--
    }
    return array
  },

  /**
   * 剪切数组，从start位置到end位置（不包含），返回剪裁的部分
   * @param {*} array 需要剪切的数组
   * @param {*} start 开始位置的检索
   * @param {*} end 结束位置检索
   */
  slice: function (array, start = 0, end = array.length) {
    return array.splice(start, end - start)
  },

  /**
   * 通过二分法，将value插入已排序的数组中，并返回其最小索引
   * @param {*} array 已排序数组
   * @param {*} value 需要插入的值
   */
  sortedIndex: function (array, value) {
    let start = 0
    let end = array.length - 1
    if (value > array[end]) {
      return array.length
    } else if (value <= array[start]) {
      return 0
    }
    while (end - start > 0) {
      let mid = Math.floor((end + start) / 2)
      if (array[mid] >= value) {
        end = mid
      } else {
        start = mid + 1
      }
      if (end - start <= 1 && array[end] >= value) {
        return end
      }
    }
  },

  /**
   * 用二分法找到value在array的最小的索引，如没有返回-1
   * @param {*} array 要搜索的数组
   * @param {*} value 要搜索的值
   */
  sortedIndexOf: function (array, value) {
    let start = 0
    let end = array.length - 1
    while (end - start > 0) {
      let mid = Math.floor((end + start) / 2)
      if (array[mid] >= value) {
        end = mid
      } else {
        start = mid + 1
      }
      if (array[start] == value) {
        return start
      }
    }
    return -1
  },

  /**
   * 使用二分法，找到在已排序的数组中可插入value的最大索引，并返回
   * @param {*} array 已排序数组
   * @param {*} value 需要插入的值
   */
  sortedLastIndex: function (array, value) {
    let start = 0
    let end = array.length - 1
    if (value >= array[end]) {
      return end + 1
    }
    if (value < array[0]) {
      return 0
    }
    while (end - start > 0) {
      let mid = Math.floor((end + start) / 2)
      if (array[mid] > value) {
        end = mid
      } else {
        start = mid + 1
      }
      if (array[start] <= value && array[end] > value && end - start <= 1) {
        return end
      }
    }
  },

  /**
   * 使用二分法，找到在已排序的数组中可查找value的最大索引，并返回，若无，返回-1
   * @param {*} array 已排序数组
   * @param {*} value 需要查找的值
   */
  sortedLastIndexOf: function (array, value) {
    let start = 0
    let end = array.length - 1
    while (end - start > 0) {
      let mid = Math.floor((end + start) / 2)
      if (array[mid] > value) {
        end = mid
      } else {
        start = mid + 1
      }
      if (array[start] == value && end - start <= 1) {
        return start
      }
    }
    return -1
  },

  /**
   * 遍历原数组，返回没有重复值的新数组
   * @param {*} array 要检查的数组
   */
  sortedUniq: function (array) {
    let map = {}
    let org = []
    for (let i of array) {
      if (!(i in map)) {
        org.push(i)
        map[i] = 1
      }
    }
    return org
  },

  /**
   * 返回数组除第一位外的全部元素，切片
   * @param {*} array 要检索的数组
   */
  tail: function (array) {
    return array.slice(1)
  },

  /**
   * 返回数组从0位开始的N个元素
   * @param {*} array 要检索的数组
   * @param {*} n 要提取的元素个数
   */
  take: function (array, n = 1) {
    return array.slice(0, n)
  },

  /**
   * 从尾部开始提取元素的个数
   * @param {*} array 要检索的数组
   * @param {*} n 要提取的个数
   */
  takeRight: function (array, n = 1) {
    if (n == 0) {
      return []
    }
    return array.slice(-n)
  },

  /**
   * 给所有输入的数组做比较，去除与之前数组的相同的值，并按输入顺序返回唯一值的新数组
   * @param  {...any} arrays 要检查的数组
   */
  union: function (...arrays) {
    let map = {}
    let i = 0
    let org = []
    while (i < arguments.length) {
      for (let j of arguments[i]) {
        if (!(j in map)) {
          org.push(j)
          map[j] = 1
        }
      }
      i++
    }
    return org
  },

  /**
   * 返回新的去重后的数组，保留第一次出现的值
   * @param {*} array 要检查的数组
   */
  uniq: function (array) {
    let map = {}
    let org = []
    for (let i of array) {
      if (!(i in map)) {
        org.push(i)
        map[i] = 1
      }
    }
    return org
  },

  /**
   * 过滤掉数组array中所有value的值，返回过滤后的新数组
   * @param {*} array 待检查数组
   * @param  {...any} values 需要过滤的值
   */
  without: function (array, ...values) {
    let map = {}
    let org = []
    for (let i of values) {
      map[i] = 1
    }
    for (let j of array) {
      if (!(j in map)) {
        org.push(j)
      }
    }
    return org
  },

  /**
   * 返回去除给定数组交集的新数组，顺序取决于他们数组的出现顺序。
   * @param  {...any} arrays 要检查的数组
   */
  xor: function (...arrays) {
    let map = {}
    let j = 0
    let org = []
    while (j < arguments.length) {
      for (let i of arguments[j]) {
        if (!(i in map)) {
          map[i] = 1
        } else {
          map[i]++
        }
      }
      j++
    }
    j = 0
    while (j < arguments.length) {
      for (let i of arguments[j]) {
        if (map[i] == 1) {
          org.push(i)
        }
      }
      j++
    }
    return org
  },

  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   * @param  {...any} arrays 待处理数组
   */
  zip: function (...arrays) {
    let max = 0
    for (let i of arrays) {
      if (i.length >= max) {
        max = i.length
      }
    }
    let org = []
    let j = 0
    while (j < max) {
      let tem = []
      for (let i = 0; i < arguments.length; i++) {
        tem.push(arguments[i][j])
      }
      org.push(tem)
      j++
    }
    return org
  },

  /**
   * 第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值
   * @param {*} props 待输入的key组成的数组
   * @param {*} values 待输入的值的数组
   */
  zipObject: function (props = [], values = []) {
    let map = {}
    let j = 0
    let i = 1
    for (let k = 0; k < arguments[i].length; k++) {
      map[arguments[j][k]] = arguments[i][k]
    }
    return map
  },

  /**
   * 拆分数组，和zip的方法相反
   * @param {*} array 待拆分的数组
   */
  unzip: function (array) {
    let org = []
    let j = 0
    while (j < array[0].length) {
      let tem = []
      for (let i = 0; i < array.length; i++) {
        tem.push(array[i][j])
      }
      org.push(tem)
      j++
    }
    return org
  },

  // find: function (collection, predicate = this.identity, fromIndex = 0) {
  //   let i = fromIndex
  //   while (i < collection.length) {
  //     for (let j in predicate) {
  //       for (let k in collection[i]) {
  //         let sum = 0
  //         if (j) {
  //           sum++
  //         }
  //       }
  //     }
  //     i++
  //   }
  // }

  /**
   * 检索value是否存在于集合collection中
   * @param {*} collection 需要检索的集合
   * @param {*} value 需要检索的值
   * @param {*} fromIndex 检索的起始位置
   */
  includes: function (collection, value, fromIndex = 0) {
    if (typeof (collection) == "string") {
      let reg = new RegExp(value, "g")
      indexOf = fromIndex
      if (reg.test(collection)) {
        return true
      } else {
        return false
      }
    }
    if (Array.isArray(collection)) {
      for (let i = fromIndex; i < collection.length; i++) {
        if (i == value) {
          return true
        }
      }
      return false
    } else if (typeof (collection) == "object") {
      for (let i in collection) {
        if (i == value || collection[i] == value) {
          return true
        }
      }
      return false
    }
  },

  /**
   * 取出集合一个随机元素
   * @param {*} collection 集合
   */
  sample: function (collection) {
    let tem
    let sum = 0
    let bl = Array.isArray(collection)
    if (!bl) {
      tem = Object.keys(collection)
    } else {
      tem = collection
    }
    let len = (tem.length + "").length
    for (let j = 0; ; j++) {
      let r = Math.floor(Math.random(1) * 10) * len
      if (r <= tem.length) {
        if (bl) {
          return collection[r]
        } else {
          return collection[tem[r]]
        }
      }
    }
  },

  /**
   * 从集合中取N个随机数
   * @param {*} collection 集合
   * @param {*} n 取样的个数
   */
  sampleSize: function (collection, n = 1) {
    let tem
    let sum = 0
    let org = []
    let bl = Array.isArray(collection)
    if (!bl) {
      tem = Object.keys(collection)
    } else {
      tem = collection
    }
    if (n > tem.length) {
      n = tem.length
    }
    let len = (tem.length + "").length
    for (let j = 0; j < n; j++) {
      let r = Math.floor(Math.random(1) * 10) * len
      if (r < tem.length && org.indexOf(r) == -1) {
        org.push(r)
        continue
      }
      j--
    }
    let count = []
    for (let i = 0; i < org.length; i++) {
      if (bl) {
        count.push(collection[org[i]])
      } else {
        count.push(collection[tem[org[i]]])
      }
    }
    return count
  },

  /**
   * 返回被打乱的新数组
   * @param {*} collection 需要打乱的数组
   */
  shuffle: function (collection) {
    let org = collection.slice(0)
    return org.sort(function () {
      return 0.5 - Math.random(1)
    })
  },

  /**
   * 返回集合长度，如果集合是对象，返回其可枚举属性的个数。
   * @param {*} collection 集合
   */
  size: function (collection) {
    if (typeof (collection) == "string" || Array.isArray(collection) == true) {
      return collection.length
    } else {
      let sum = 0
      for (let i in collection) {
        sum += 1
      }
      return sum
    }
  },

  /**
   * 比较两者值，看是否相等
   * @param {*} value 
   * @param {*} other 
   */
  eq: function (value, other) {
    if (value !== value && other !== other) {
      return true
    }
    return (value === other) ? true : false
  },

  /**
   * 检查value是否大于other
   * @param {*} value 
   * @param {*} other 
   */
  gt: function (value, other) {
    return (value > other) ? true : false
  },

  /**
   * 检查value是否大于或等于other
   * @param {*} value 
   * @param {*} other 
   */
  gte: function (value, other) {
    return (value >= other) ? true : false
  },

  /**
   * 判断value是否是一个arguments对象
   * @param {*} value 
   */
  isArguments: function (value) {
    let tsr = Object.prototype.toString
    if (tsr.call(value) == "[object Arguments]") {
      return true
    } else {
      return false
    }
  },

  /**
   * 判断value是否是一个Array类对象
   * @param {*} value 
   */
  isArray: function (value) {
    let tsr = Object.prototype.toString
    if (tsr.call(value) == "[object Array]") {
      return true
    } else {
      return false
    }
  },


  /**
   * 判断value是否是Boolean类型
   * @param {*} value 
   */
  isBoolean: function (value) {
    let tsr = Object.prototype.toString
    if (tsr.call(value) == "[object Boolean]") {
      return true
    } else {
      return false
    }
  },

  /**
   * 将value转成字符串，null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。
   * @param {*} value 
   */
  toString: function (value) {
    if (value == null || value == undefined) {
      return ""
    }
    if (value == -0) {
      return "-0"
    }
    let str = ""
    if (this.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        str += value[i] + ","
      }
      return str.slice(0, -1)
    } else {
      return str + value
    }
  },

  /**
   * 返回两数之和
   * @param {*} augend 
   * @param {*} addend 
   */
  add: function (augend, addend) {
    return augend + addend
  },

  ceil: function (number, precision = 0) {


  },

  /**
   * 两数相除
   * @param {*} dividend 
   * @param {*} divisor 
   */
  divide: function (dividend, divisor) {
    return dividend / divisor
  },

  /**
   * 找出数组中最大的值
   * @param {*} array 
   */
  max: function (array) {
    let max = -Infinity
    if (array.length == 0) {
      return undefined
    }
    for (let i of array) {
      if (i > max) {
        max = i
      }
    }
    return max
  },

  /**
   * 取数组平均值
   * @param {*} array 
   */
  mean: function (array) {
    let sum = 0
    for (let i of array) {
      sum += i
    }
    return sum / array.length
  },

  /**
   * 找数组最小的值
   * @param {*} array 
   */
  min: function (array) {
    let min = Infinity
    if (array.length == 0) {
      return undefined
    }
    for (let i of array) {
      if (i < min) {
        min = i
      }
    }
    return min
  },

  /**
   * 两数相乘
   * @param {*} multiplier 
   * @param {*} multiplicand 
   */
  multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
  },

  /**
   * 两数相减
   * @param {*} minuend 
   * @param {*} subtrahend 
   */
  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend
  },

  /**
   * 得出数组之和
   * @param {*} array 
   */
  sum: function (array) {
    let sum = 0
    for (let i of array) {
      sum += i
    }
    return sum
  },

  /**
   * 将来源对象的可枚举属性复制到目标对象，如一旦设置了相同属性的值，后续的将被忽略掉。
   * @param {*} object 目标对象
   * @param  {...any} sources 来源对象
   */
  defaults: function (object, ...sources) {
    for (let j = 0; j < sources.length; j++) {
      for (let i in sources[j]) {
        if (!(i in object)) {
          object[i] = sources[j][i]
        }
      }
    }
    return object
  },
}
