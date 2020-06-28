
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
      if (value.length > 1) return false
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
    let map = this.concat([], ...values)
    let count = []
    for (let i of array) {
      if (!(map.includes(i))) {
        count.push(i)
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
      if (this.isArray(j)) {
        for (let k of j) {
          org.push(array[k])
        }
      } else {
        org.push(array[j])
      }
    }
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
    let re = [], org = []
    arrays.forEach(it => re = re.concat(it))
    re.forEach(it => {
      if (map[it]) map[it]++
      else map[it] = 1
    })
    for (let i in map) {
      if (map[i] < 2) org.push(i * 1)
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
   * 判断value是否小于other
   * @param {*} value 
   * @param {*} other 
   */
  lt: function (value, other) {
    return (value < other) ? true : false
  },
  /**
 * 判断value是否小于等于other
 * @param {*} value 
 * @param {*} other 
 */
  lte: function (value, other) {
    return (value <= other) ? true : false
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
   * 判断value是否是Number类型
   * @param {*} value 
   */
  isNumber: function (value) {
    let tsr = Object.prototype.toString
    if (tsr.call(value) == "[object Number]") {
      return true
    } else {
      return false
    }
  },

  /**
   * 判断value是否是Object类型
   * @param {*} value 
   */
  isObject(value) {
    if (value == null) return false
    if (typeof value === "object" || typeof value === "function") return true
    else return false

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

  /**
   * 根据precision，向上取整
   * @param {*} number 
   * @param {*} precision 
   */
  ceil: function (number, precision = 0) {
    if (precision == 0) {
      return Math.ceil(number)
    } else {
      let mul = number * Math.pow(10, precision)
      return Math.ceil(mul) / Math.pow(10, precision)
    }
  },

  /**
   * 根据precision，向下取整
   * @param {*} value 
   * @param {*} precision 
   */
  floor: function (value, precision = 0) {
    if (precision == 0) {
      return Math.floor(value)
    } else {
      let mul = value * Math.pow(10, precision)
      return Math.floor(mul) / Math.pow(10, precision)
    }
  },
  /**
   * 根据precision，四舍五入
   * @param {*} value 
   * @param {*} precision 
   */
  round: function (value, precision = 0) {
    if (precision == 0) {
      return Math.round(value)
    } else {
      let mul = value * Math.pow(10, precision)
      return Math.round(mul) / Math.pow(10, precision)
    }
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

  /**
   * 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
   * @param {*} object 要倒置的对象
   */
  invert: function (object) {
    let map = {}
    for (let i in object) {
      map[object[i]] = i
    }
    return map
  },

  /**
   * 取对象上的keys，传进数组并返回，非对象转换为对象
   * @param {*} object 
   */
  keys: function (object) {
    let org = []
    for (let i in object) {
      if (object.hasOwnProperty(i)) {
        org.push(i)
      }
    }
    return org
  },

  omit: function (object, ...props) {
    for (let j of props) {
      if (this.isArray(j)) {
        for (let k of j) {
          delete object[k]
        }
      } else {
        delete object[j]
      }
    }
    return object
  },

  /**
   * 创建一个从 object 中选中的属性的对象。
   * @param {*} object 
   * @param  {...any} props 
   */
  pick: function (object, ...props) {
    let map = {}
    for (let j of props) {
      if (this.isArray(j)) {
        for (let k of j) {
          map[k] = object[k]
        }
      } else {
        map[j] = object[j]
      }
    }
    return map
  },

  /**
   * 创建 object 自身可枚举属性的值为数组。非对象的值会强制转换为对象。
   * @param {*} object 
   */
  values: function (object) {
    let obj = Object(object)
    let org = []
    for (let i in obj) {
      if (object.hasOwnProperty(i)) {
        org.push(obj[i])
      }
    }
    return org
  },

  /**
   * 字符串的第一位大写，其他小写
   * @param {*} string 
   */
  capitalize: function (string = "") {
    let str = ""
    if (string.length == 0) {
      return string
    } else {
      str += string[0].toUpperCase()
      for (let i = 1; i < string.length; i++) {
        str += string[i].toLowerCase()
      }
    }
    return str
  },

  /**
   * 将输入字符串改成小驼峰写法
   * @param {*} string 
   */
  camelCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    let str = ""
    for (let i of ary) {
      if (i == ary[0]) {
        str += i.toLowerCase()
      } else {
        str += i[0].toUpperCase()
        str += i.slice(1).toLowerCase()
      }
    }
    return str
  },

  /**
   * 判断字符串是否是以给定的字母结尾
   * @param {*} string 
   * @param {*} target 
   * @param {*} position 
   */
  endsWith: function (string = "", target, position = string.length) {
    string = string.slice(0, position)
    let i = string.length - 1
    if (string[i] == target) {
      return true
    } else {
      return false
    }
  },

  /**
   * 转义字符串中特殊字符
   * @param {*} string 
   */
  escape: function (string = "") {
    let str = ""
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
        case "&":
          str += "&amp;";
          break;
        case "<":
          str += "&lt;";
          break;
        case ">":
          str += "&gt;";
          break;
        case '"':
          str += "&quot;";
          break;
        case "'":
          str += "&apos;";
          break;
        default:
          str += string[i];
      }
    }
    return str
  },

  /**
   * 将字符串转成串串写法
   * @param {*} string 
   */
  kebabCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    if (ary.length == 1) {
      let str = ""
      for (let i of ary[0]) {
        if (i == i.toUpperCase()) {
          str = str + "-" + i
        } else {
          str += i
        }
      }
      return str.toLowerCase()
    } else {
      return ary.join("-").toLowerCase()
    }
  },

  /**
   * 将字符串,转换为小写形式,并以空格隔开
   * @param {*} string 
   */
  lowerCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    if (ary.length == 1) {
      let str = ""
      for (let i of ary[0]) {
        if (i == i.toUpperCase()) {
          str = str + " " + i
        } else {
          str += i
        }
      }
      return str.toLowerCase()
    } else {
      return ary.join(" ").toLowerCase()
    }
  },

  /**
   * 将字符串的第一位小写并返回
   * @param {*} string 
   */
  lowerFirst: function (string = "") {
    let str = ""
    return str + string[0].toLowerCase() + string.slice(1)
  },

  /**
   * 将字符串填充至给定的长度，从两边以chars填充，若无法对称，优先从左
   * @param {*} string 
   * @param {*} length 填充至的长度
   * @param {*} chars 填充物
   */
  pad: function (string = "", length = 0, chars = " ") {
    let count = 0
    while (string.length < length) {
      count++
      if (count % 2) {
        string += chars
      } else {
        string = chars + string
      }
      while (string.length > length) {
        string = string.slice(0, -1)
      }
    }
    return string
  },

  /**
   * 将字符串填充至给定的长度，以chars从最后填充
   * @param {*} string 
   * @param {*} length 填充至的长度
   * @param {*} chars 填充物
   */
  padEnd: function (string = "", length = 0, chars = " ") {
    while (string.length < length) {
      string += chars
      if (string.length > length) {
        string = string.slice(0, length - string.length)
      }
    }
    return string
  },

  /**
   * 将字符串填充至给定的长度，以chars从起始填充
   * @param {*} string 
   * @param {*} length 填充至的长度
   * @param {*} chars 填充物
   */
  padStart: function (string = "", length = 0, chars = " ") {
    if (string.length == length) {
      return string
    }
    while (string.length + chars.length < length) {
      chars += chars
      if (string.length + chars.length > length) {
        chars = chars.slice(0, length - string.length)
      }
    }
    return chars + string
  },

  /**
   * 
   * @param {*} string 
   * @param {*} radix 
   */
  parseInt: function (string, radix = 10) {
    return + Number(string).toString(radix)
  },

  /**
   * 将string重复N次
   * @param {*} string 
   * @param {*} n 
   */
  repeat: function (string = "", n = 1) {
    let str = ""
    while (n > 0) {
      str += string
      n--
    }
    return str
  },

  /**
   * 用 reolacement 替换原字符串中的 pattern
   * @param {*} string 
   * @param {*} pattern 
   * @param {*} reolacement 
   */
  replace: function (string = "", pattern, reolacement) {
    let reg = new RegExp(pattern)
    return string.replace(reg, reolacement)
  },

  /**
   * 将字符串转换为蛇形写法
   * @param {*} string 
   */
  snakeCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    if (ary.length == 1) {
      let str = ""
      for (let i of ary[0]) {
        if (i == i.toUpperCase()) {
          str = str + "_" + i
        } else {
          str += i
        }
      }
      return str.toLowerCase()
    } else {
      return ary.join("_").toLowerCase()
    }
  },

  /**
   * 通过分隔符 separator 分隔字符串,返回成 limit 长度的数组
   * @param {*} string 
   * @param {*} separator 
   * @param {*} limit 
   */
  split: function (string = "", separator, limit) {
    let reg = new RegExp('[^' + separator + "]", "g")
    let ary = string.match(reg)
    ary.length = limit
    return ary
  },

  /**
   * 将字符串转换为以大写开头的
   * @param {*} string 
   */
  startCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    if (ary.length == 1) {
      let str = ary[0][0].toUpperCase()
      for (let i of ary[0].slice(1)) {
        if (i == i.toUpperCase()) {
          str = str + " " + i
        } else {
          str += i
        }
      }
      return str
    } else {
      let str = ""
      for (let i of ary) {
        str += i[0].toUpperCase() + i.slice(1)
        if (i == ary[ary.length - 1]) {
          return str
        }
        str += " "
      }
    }
  },

  /**
   * 检查字符串是否是以 target 开始的， 开始位置以 position 索引为基准
   * @param {*} string 
   * @param {*} target 
   * @param {*} position 
   */
  startsWith: function (string = "", target, position = 0) {
    let str = string.slice(position)
    return (str[0] == target) ? true : false
  },

  /**
   * 将字符串转换成全小写
   * @param {*} string 
   */
  toLower: function (string = "") {
    return string.toLowerCase()
  },

  /**
   * 将字符串转换成全大写
   * @param {*} string 
   */
  toUpper: function (string = "") {
    return string.toUpperCase()
  },

  /**
   * 从字符串中删除前导和尾随空格或指定的字符chars
   * @param {*} string 
   * @param {*} chars 
   */
  trim: function (string = "", chars = " ") {
    let map = {}
    for (let i of chars) {
      map[i] = 1
    }
    let j = string.length - 1
    while (j > 0) {
      if (string[0] in map) {
        string = string.slice(1)
        j--
      }
      if (string[j] in map) {
        string = string.slice(0, -1)
        j--
      }
      if (!(string[0] in map && string[j] in map)) {
        return string
      }
    }
    return string
  },

  /**
   * 从字符串中删除尾随空格或指定的字符chars。
   * @param {*} string 
   * @param {*} chars 
   */
  trimEnd: function (string = "", chars = " ") {
    let map = {}
    for (let i of chars) {
      map[i] = 1
    }
    let j = string.length - 1
    while (j > 0) {
      if (string[j] in map) {
        string = string.slice(0, -1)
        j--
      } else {
        return string
      }
    }
  },

  /**
   * 从字符串中删除前导空格或指定的字符chars。
   * @param {*} string 
   * @param {*} chars 
   */
  trimStart: function (string = "", chars = " ") {
    let map = {}
    for (let i of chars) {
      map[i] = 1
    }
    while (1) {
      if (string[0] in map) {
        string = string.slice(1)
      } else {
        return string
      }
    }
  },

  /**
   * 如果字符串比给定的最大字符串长度长，则截断该字符串。截断字符串的最后几个字符被省略字符串替换，省略字符串的默认值是“…”。
   * @param {*} string 
   * @param {*} options 
   */
  truncate: function (string = "", options = {}) {
    if (!("length" in options)) {
      options.length = 30
    }
    if (!("separator" in options)) {
      options.separator = ""
    }
    if (!("omission" in options)) {
      options.omission = "..."
    }
    let str = string.slice(0, options.length - options.omission.length)
    let len = options.separator.length
    if (options.separator instanceof RegExp) {
      if (options.separator.test(str)) {
        let reg = new RegExp(options.separator, "g")
        let e
        while (1) {
          let n = reg.exec(str)
          if (n == null) {
            break
          } else {
            e = n.index
          }
        }
        str = str.slice(0, e)
      }
    } else if (options.separator !== "") {
      let k = str.length - 1
      while (1) {
        if (str[k] !== options.separator) {
          k--
        } else {
          str = str.slice(0, k)
          break
        }
      }

    }
    return str + options.omission
  },

  /**
   * 将字符串中的转义模式替换成普通符
   * @param {*} string 
   */
  unescape: function (string = "") {
    let map = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
    }
    for (let i in map) {
      let reg = new RegExp(i, "g")
      string = string.replace(reg, map[i])
    }
    return string
  },

  /**
   * 将字符串(如空格分隔的单词)转换为大写。
   * @param {*} string 
   */
  upperCase: function (string = "") {
    let reg = /(?<=[\w]*)([A-Za-z]+)(?=[\w]*)/g
    let ary = string.match(reg)
    if (ary.length == 1) {
      let str = ""
      for (let i of ary[0]) {
        if (i == i.toUpperCase()) {
          str = str + " " + i
        } else {
          str += i
        }
      }
      return str.toUpperCase()
    } else {
      return ary.join(" ").toUpperCase()
    }
  },

  /**
   * 将字符串的第一个字符转换为大写
   * @param {*} string 
   */
  upperFirst: function (string = "") {
    return string[0].toUpperCase() + string.slice(1)
  },

  /**
   * 将字符串分割为一个单词数组。
   * @param {*} string 
   * @param {*} pattern 
   */
  words: function (string, pattern = /\w+/g) {
    return string.match(pattern)
  },

  /**
   * 建立数组，范围值为start-end，每相邻值的差为step
   * @param {*} start 
   * @param {*} end 
   * @param {*} step 
   */
  range: function (start = 0, end, step = 1) {
    if (arguments.length == 1) {
      end = arguments[0]
      start = 0
      if (end < 0) {
        step = -1
      }
    }
    let ary = []
    let i = start
    if ((end > 0 && step > 0) || (end < 0 && step < 0)) {
      while (1) {
        ary.push(i)
        i += step
        if (i == end) {
          break
        }
      }
    }
    if (step == 0) {
      while (ary.length < end - start) {
        ary.push(start)
      }
    }
    return ary
  },

  /**
   * 多维数组转化为一维
   * @param {*} array 多维数组
   * @param {*} ans 待输出的结果数组
   */
  flattenDeep: function (array, ans = []) {
    return array.reduce((ans, item) => {
      if (typeof (item) == "number") {
        ans.push(item)
      } else {
        this.flattenDeep(item, ans)
      }
      return ans
    }, ans)
  },

  /**
   * 数组降指定维度
   * @param {*} array 多维数组
   * @param {*} depth 所需要将的维度
   * @param {*} ans 返回数组
   */
  flattenDepth: function (array, depth = 1, ans = []) {
    if (depth < 0) {
      return ans.push(array)
    }
    return array.reduce((ans, item) => {
      if (typeof (item) !== "object") {
        ans.push(item)
      } else {
        this.flattenDepth(item, depth - 1, ans)
      }
      return ans
    }, ans)
  },

  /**
   * toPairs的逆;此方法返回由键-值对组成的对象
   * @param {*} pairs 集合
   */
  fromPairs: function (pairs) {
    let obj = {}
    pairs.forEach(ar => obj[ar[0]] = ar[1])
    return obj
  },

  /**
   * 通过迭代来运行集合中的每个元素并扁平映射结果，从而创建一个扁平的值数组
   * @param {*} collection 输入集合
   * @param {*} iteratee 对集合进行处理的函数
   */
  flatMap: function (collection, iteratee = this.identity) {
    let arr = []
    collection.forEach(item => {
      arr = arr.concat(iteratee(item))
    })
    return arr
  },

  /**
   * 这个方法类似于flatMap。除了递归地扁平化映射的结果之外，它是扁平化的
   * @param {*} collection 
   * @param {*} iteratee 
   */
  flatMapDeep: function (collection, iteratee = this.identity) {
    let arr = []
    collection.forEach(item => {
      arr = arr.concat(iteratee(item))
    })
    arr = this.flattenDeep(arr)
    return arr
  },
  /**
   * 这个方法类似于flatMap。根据递归的深度，进行扁平化处理
   * @param {*} collection 
   * @param {*} iteratee 
   * @param {*} depth 递归深度
   */
  flatMapDepth: function (collection, iteratee = this.identity, depth = 1) {
    let arr = []
    collection.forEach(item => {
      arr = arr.concat(iteratee(item))
    })
    arr = this.flattenDepth(arr, depth - 1)
    return arr
  },

  /**
   * 实现迭代
   * @param {*} collection 
   * @param {*} iteratee 
   */
  forEach: function (collection, iteratee = this.identity) {
    for (let i in collection) {
      iteratee(collection[i], i)
    }
    return collection
  },
  /**
   * 倒序迭代
   * @param {*} collection 
   * @param {*} iteratee 
   */
  forEachRight: function (collection, iteratee = this.identity) {
    for (let i = collection.length - 1; i >= 0; i--) {
      iteratee(collection[i])
    }
    return collection
  },

  /**
   * 创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。
   * @param {*} func 
   * @param {*} n 最多接受参数
   */
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },

  /**
   * 创建一个针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。
   * @param {*} func 
   */
  negate: function (func) {
    return function (...args) {
      return !func(...args)
    }
  },

  /**
   * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入
   * @param {*} func 
   * @param {*} start 
   */
  spread: function (func, start = 0) {
    return function (ary) {
      return func(...ary)
    }
  },

  /**
   * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 
   * @param {*} collection 需要迭代的集合
   * @param {*} predicate 过滤器 （函数，数组，字符串，对象的形式）
   */
  filter: function (collection, predicate = this.identity) {
    let fnc = this.iteratee(predicate)
    let result = []
    for (let i of collection) {
      if (fnc(i)) result.push(i)
    }
    return result
  },

  /**
   * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止
   * @param {*} collection 
   * @param {*} predicate 
   */
  every: function (collection, predicate = this.identity) {
    let fnc = this.iteratee(predicate)
    for (let i of collection) {
      if (!fnc(i)) {
        return false
      }
    }
    return true
  },

  /**
   * 除了它接受一个 iteratee ， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）
   * @param {*} array 
   * @param  {...any} value 
   */
  differenceBy: function (array, ...value) {
    let ans = []
    let iteratee = value[value.length - 1]
    let com = []
    if (typeof iteratee == "function") {
      for (let i of value.slice(0, -1)) com = com.concat(i)
      let res = array.map(iteratee)
      let idx = this.difference(res, com.map(iteratee)).map(it => res.indexOf(it))
      idx.forEach(it => ans.push(array[it]))
      return ans
    } else {
      if (Array.isArray(iteratee)) return this.difference(array, ...value)
      else {
        value.slice(0, -1).forEach(it => com = com.concat(it))
        for (let i of com) {
          for (let j in i) array.forEach(it => it[j] !== i[j] ? ans.push(it) : it)
        }
        return ans
      }
    }
  },

  /**
   * 对比两位输入的值是否相同
   * @param {*} value 
   * @param  {...any} other 
   */
  isEqual: function (value, other) {
    if (value === other) return true
    if (typeof value == "object") {
      let valkey = Object.keys(value)
      let othkey = Object.keys(other)
      if (valkey.length !== othkey.length) return false
      for (let i of valkey) {
        if (typeof value[i] == "object") {
          let bl = this.isEqual(value[i], other[i])
          if (!bl) return false
          continue
        }
        if (value[i] !== other[i]) return false
      }
      return true
    }
    return false
  },

  /**
   * 类似 difference ，它接受一个 comparator （比较器），它调用比较array，values中的元素。值是从array中选择。comparator 调用参数有两个：(arrVal, othVal)。
   * @param {*} value 
   * @param  {...any} other 
   */
  differenceWith: function (array, values, comparator) {
    let res = []
    array.forEach(it => {
      let bl = comparator(it, ...values)
      bl ? bl : res.push(it)
    })
    return res
  },

  /**
   * 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)
   * */
  dropRightWhile: function (array, predicate = this.identity) {
    let res = [], bl = false, fnc
    if (typeof predicate == "string") {
      for (let i of array) {
        if (predicate in i) res.push(i)
      }
      return res
    }
    if (Array.isArray(predicate)) predicate = this.fromPairs([predicate])
    if (typeof predicate == "function") fnc = predicate
    else fnc = this.matches(predicate)
    for (let i = 0; i < array.length; i++) {
      bl = fnc(array[i])
      if (bl) return res
      res.push(array[i])
    }
  },

  /**
   * 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
  */
  dropWhile: function (array, predicate = this.identity) {
    let res = [], bl = false, fnc
    if (typeof predicate == "string") {
      for (let i of array) {
        if (predicate in i) res.push(i)
      }
      return res
    }
    if (Array.isArray(predicate)) predicate = this.fromPairs([predicate])
    if (typeof predicate == "function") fnc = predicate
    else fnc = this.matches(predicate)
    for (let i = 0; i < array.length; i++) {
      bl = fnc(array[i])
      if (!bl) {
        while (i < array.length) res.push(array[i]), i++
        return res
      }
    }
  },
  /** 
   * 比较函数
  */
  matches: function (source) {
    return function (obj) {
      for (let i in source) {
        if (source[i] !== obj[i]) return false
      }
      return true
    }
  },

  /**
   * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。
   * @param {*} path 
   * @param {*} srcValue 
   */
  matchesProperty: function (path, srcValue) {
    return function (obj) {
      if (obj[path] === srcValue) return true
      else return false
    }
  },
  /**
   *根据路径取值
   * */
  property: function (path) {
    return function (obj) {
      return obj[path]
    }
  },

  /**
   * 该方法返回第一个通过 predicate 判断为  true  值的元素的索引值（index），而不是元素本身。
   * @param {*} array 要搜索的数组
   * @param {*} predicate 判断函数/或其他值
   * @param {*} fromIndex 起始下标
   */
  findIndex: function (array, predicate = this.identity, fromIndex = 0) {
    let bl = false, fnc
    if (typeof predicate == "string") {
      for (let i = fromIndex; i < array.length; i++) {
        if (array[i][predicate]) return i
      }
    }
    if (Array.isArray(predicate)) predicate = this.fromPairs([predicate])
    if (typeof predicate == "function") fnc = predicate
    else fnc = this.matches(predicate)
    for (let i = fromIndex; i < array.length; i++) {
      bl = fnc(array[i])
      if (bl) return i
    }
    return -1
  },
  /**
   * 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素
   * @param {*} array 要搜索的数组
   * @param {*} predicate 判断函数/或其他值
   * @param {*} fromIndex 起始下标
   */
  findLastIndex: function (array, predicate = this.identity, fromIndex = array.length - 1) {
    let fnc
    if (typeof predicate == "string") {
      for (let i = fromIndex; i >= 0; i--) {
        if (array[i][predicate]) return i
      }
    }
    if (Array.isArray(predicate)) predicate = this.fromPairs([predicate])
    if (typeof predicate == "function") fnc = predicate
    else fnc = this.matches(predicate)
    for (let i = fromIndex; i >= 0; i--) {
      let bl = fnc(array[i])
      if (bl) return i
    }
    return -1
  },

  /**
   * 类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择
   * @param  {...any} arrays 
   */
  intersectionBy: function (...arrays) {
    if (Array.isArray(arrays[arrays.length - 1])) return this.intersection(...arrays)
    let iteratee = arrays.pop()
    let ans = [], com = []
    arrays.slice(1).forEach(it => com = com.concat(it))
    if (typeof iteratee == "function") {
      let arr = arrays[0].map(iteratee)
      let idx = this.intersection(arr, com.map(iteratee)).map(it => arr.indexOf(it))
      idx.forEach(it => ans.push(arrays[0][it]))
      return ans
    } else {
      for (let i of com) {
        arrays[0].forEach(it => it[iteratee] === i[iteratee] ? ans.push(it) : it)
      }
      return ans
    }
  },

  /**
   * 类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。
   * @param  {...any} arrays 
   */
  intersectionWith: function (...arrays) {
    let comparator = arrays.pop()
    let res = []
    arrays[0].forEach(it => arrays[1].forEach(i => {
      let bl = comparator(it, i)
      if (bl) res.push(it)
    }))
    return res
  },

  /**
   * 接受一个 iteratee 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较
   * @param {*} array 要修改的数组。
   * @param {*} values 要移除值的数组。
   * @param {*} iteratee iteratee（迭代器）调用每个元素。
   */
  pullAllBy: function (array, values, iteratee = this.identity) {
    if (typeof iteratee == "function") {
      return this.pullAll(iteratee(array), iteratee(values))
    }
    values.forEach(it => array.forEach((val, idx) => {
      if (it[iteratee] === val[iteratee]) array.splice(idx, 1)
    }))
    return array
  },

  /**
   * 接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。
   * @param {*} array 
   * @param {*} values 
   * @param {*} comparator 
   */
  pullAllWith: function (array, values, comparator) {
    array.forEach((it, idx) => values.forEach(i => {
      let bl = comparator(it, i)
      if (bl) array.splice(idx, 1)
    }))
    return array
  },

  /**
   * 接受一个 iteratee ，调用每一个数组（array）元素，返回结果和value 值比较来计算排序
   * @param {*} array 
   * @param {*} value 
   * @param {*} iteratee 迭代器
   */
  sortedIndexBy: function (array, value, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    for (let i = 0; i < array.length; i++) {
      if (fnc(array[i]) === fnc(value)) return i
    }
  },

  /**
   * 除了 它返回 value值 在 array 中尽可能大的索引位置（index）。
   * @param {*} array 
   * @param {*} value 
   * @param {*} iteratee 
   */
  sortedLastIndexBy: function (array, value, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    for (let i = 0; i < array.length; i++) {
      if (fnc(array[i]) === fnc(value) && fnc(array[i + 1]) !== fnc(value)) return i + 1
    }
  },

  /**
   * 类似 _.uniqBy，除了它会调用函数优化排序数组。
   * @param {*} array 
   * @param {*} iteratee 调用的函数
   */
  sortedUniqBy: function (array, iteratee) {
    let ans = []
    let res = array.map(iteratee)
    this.sortedUniq(res).map(it => res.indexOf(it)).forEach(i => ans.push(array[i]))
    return ans
  },

  /**
   * 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
   * @param {*} array 
   * @param {*} predicate 
   */
  takeRightWhile: function (array, predicate = this.identity) {
    let fnc = this.iteratee(predicate)
    if (typeof predicate === "string") {
      for (let i = array.length - 1; i >= 0; i--) {
        if (predicate in array[i]) return array.slice(i + 1)
      }
    }
    for (let i = array.length - 1; i >= 0; i--) {
      if (!fnc(array[i])) return array.slice(i + 1)
    }
  },

  /**
   * 从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
   * @param {*} array 
   * @param {*} predicate 
   */
  takeWhile: function (array, predicate = this.identity) {
    let fnc = this.iteratee(predicate)
    if (typeof predicate === "string") {
      for (let i = 0; i < array.length; i++) {
        if (predicate in array[i]) return array.slice(0, i)
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (!fnc(array[i])) return array.slice(0, i)
    }
  },

  /**
   * 接受一个 iteratee （迭代函数），去重
   * @param  {...any} arrays 
   */
  unionBy: function (...arrays) {
    let iteratee = arrays.pop()
    let ans = [], res = [], part = []
    if (typeof iteratee === "function") {
      arrays.forEach(it => part = part.concat(it))
      res = part.map(iteratee)
      this.sortedUniq(res).map(it => res.indexOf(it)).forEach(i => ans.push(part[i]))
      return ans
    } else {
      let map = {}
      arrays.forEach(it => it.forEach(i => {
        if (!(i[iteratee] in map)) ans.push(i), map[i[iteratee]] = 1
      }))
      return ans
    }
  },

  unionWith: function (...arrays) {
    let fnc = arrays.pop()
    let ans = [].concat(...arrays)
    for (let i = 0; i < ans.length; i++) {
      for (let j = i + 1; j < ans.length; j++) {
        if (fnc(ans[i], ans[j])) ans.splice(j, 1), j--
      }
    }
    return ans
  },

  iteratee: function (func = this.identity) {
    if (typeof func == "function") return func
    if (Array.isArray(func)) return this.matchesProperty(...func)
    if (typeof func == "object") return this.matches(func)
    if (typeof func == "string") return this.property(func)
  },

  /**
   * 类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值
   * @param {*} array 
   * @param {*} iteratee 
   */
  unzipWith: function (array, iteratee = this.identity) {
    let ans = []
    for (let i = 0; i < array[0].length; i++) {
      ans[i] = array.reduce((it, itm) => iteratee(it[i], itm[i]))
    }
    return ans
  },

  /**
   * 类似 _.uniq ，调用函数迭代去重
   * @param {*} array 
   * @param {*} iteratee 
   */
  uniqBy: function (array, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    let ans = []
    let res = array.map(fnc)
    this.sortedUniq(res).map(it => res.indexOf(it)).forEach(i => ans.push(array[i]))
    return ans
  },

  /**
   * 类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素
   * @param {*} array 
   * @param {*} comparator 
   */
  uniqWith: function (array, comparator) {
    let ans = array.slice(0)
    let fnc = this.iteratee(comparator)
    for (let i = 0; i < ans.length; i++) {
      for (let j = i + 1; j < ans.length; j++) {
        if (fnc(ans[i], ans[j])) ans.splice(j, 1), j--
      }
    }
    return ans
  },

  /**
   * 去重，数组，对象等
   * 接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。
   * @param  {...any} arrays 
   */
  xorBy: function (...arrays) {
    let fnc = this.iteratee(arrays.pop())
    let result = [], ans = []
    arrays.forEach(it => result = result.concat(it))
    let res = result.map(fnc)
    this.xor(res).map(it => res.indexOf(it)).forEach(i => ans.push(result[i]))
    return ans
  },

  /**特殊去重，双对象去重
   * 接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
   * @param  {...any} arrays  要检查的数组。
   */
  xorWith: function (...arrays) {
    let fnc = arrays.pop()
    let res = [], ans = []
    arrays.forEach(it => res = res.concat(it))
    for (let i = 0; i < res.length; i++) {
      if (!res[i]) continue
      let count = 0
      for (let j = i + 1; j < res.length; j++) {
        if (!res[j]) continue
        let bl = fnc(res[i], res[j])
        if (bl) res[j] = null, count++
      }
      if (count == 0) ans.push(res[i])
    }
    return ans
  },

  /**
   * 类似 _.zipObject，除了它支持属性路径。
   * @param {*} props 
   * @param {*} values 
   */
  zipObjectDeep: function (props = [], values = []) {
    let obj = {}
    for (let i = 0; i < props.length; i++) {
      this.set(obj, props[i], values[i])
    }
    return obj
  },

  /**
   * 类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).
   * @param  {...any} arrays 
   */
  zipWith: function (...arrays) {
    let fnc = arrays.pop()
    let result = []
    for (let i = 0; i < arrays[0].length; i++) {
      let arg = []
      for (let j = 0; j < arrays.length; j++) {
        arg.push(arrays[j][i])
      }
      let val = fnc(...arg)
      result.push(val)
    }
    return result
  },
  /**
   * 设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。
   * @param {*} object 
   * @param {*} path 
   * @param {*} value 
   */
  set: function (object, path, value) {
    if (typeof path == "string") {
      let reg = /(\[)/g
      path = path.replace(reg, ".")
      reg = /(\])/g
      path = path.replace(reg, "")
      path = path.split(".")
    }
    let str = "object."
    let j
    for (let i = 0; i < path.length; i++) {
      if (Number(path[i]) === 0 || Number(path[i])) {
        str = str.slice(0, -1)
        str += "[" + path[i] + "]."
      } else {
        str += path[i] + "."
      }
      j = str.slice(0, -1)
      if (!eval(j)) {
        if (Number(path[i + 1]) === 0 || Number(path[i + 1])) {
          eval(j + "=" + "[]")
        } else {
          eval(j + "=" + "{}")
        }
      }
    }
    eval(j + "=" + value)
    return object
  },

  /**
   * 创建一个组成对象，每个值 经过 iteratee 处理过的结果 当做 key，每个key对应的值是 iteratee返回该key。 iteratee 调用一个参数：(value)。
   * @param {*} collection 
   * @param {*} iteratee 
   */
  countBy: function (collection, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    let obj = {}
    let res = collection.map(fnc)
    for (let i of res) {
      if (obj[i]) obj[i]++
      else obj[i] = 1
    }
    return obj
  },

  /**
   * 返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。
   * @param {*} collection 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  find: function (collection, predicate = this.identity, fromIndex = 0) {
    let fnc = this.iteratee(predicate)
    for (let i = fromIndex; i < collection.length; i++) {
      if (fnc(collection[i])) {
        return collection[i]
      }
    }
  },

  /**
   * 类似_.find ，不同之处在于，_.findLast是从右至左遍历collection （集合）元素的。
   * @param {*} collection 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  findLast: function (collection, predicate = this.identity, fromIndex = collection.length - 1) {
    let fnc = this.iteratee(predicate)
    for (let i = fromIndex; i >= 0; i--) {
      if (fnc(collection[i])) {
        return collection[i]
      }
    }
  },

  /**
   * 类似  countBy  
   * 每个键对应的值负责生成 key 的元素组成的数组。
   * @param {*} collection 
   * @param {*} iteratee 
   */
  groupBy: function (collection, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    let obj = {}
    let res = collection.map(fnc)
    for (let i of res) {
      if (!obj[i]) {
        obj[i] = []
      }
      let idx = res.indexOf(i)
      res[idx] = null
      obj[i].push(collection[idx])
    }
    return obj
  },

  /**
   * 调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。
   * @param {*} collection 
   * @param {*} path 
   * @param  {...any} args 
   */
  invokeMap: function (collection, path, ...args) {
    let api = null, t
    let ans = []
    for (let i in collection) {
      if (Array.isArray(collection[i])) {
        api = Array.prototype
      } else {
        api = String.prototype
      }
      if (typeof path == "function") {
        t = path.call(collection[i], ...args)
      } else {
        t = api[path].call(collection[i], ...args)
      }
      ans.push(t)
    }
    return ans
  },

  /**
   * 以处理过的值作为键 key ，原数据作为值 组成的对象
   * @param {*} collection 
   * @param {*} iteratee 
   */
  keyBy: function (collection, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    let obj = {}
    for (let i in collection) {
      obj[fnc(collection[i])] = collection[i]
    }
    return obj
  },

  /**
   * 实现 map 函数
   * @param {*} collection 
   * @param {*} iteratee 
   */
  map: function (collection, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee)
    let res = []
    for (let i in collection) {
      let f = fnc(collection[i])
      res.push(f)
    }
    return res
  },

  /**
   * 创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)
   * @param {*} collection 
   * @param  {...any} args 
   */
  sortBy: function (collection, ...args) {
    let ary = collection.slice()
    let res = [], fnc
    args.forEach(it => res = res.concat(it))
    for (let i = 0; i < res.length; i++) {
      if (typeof res[i] == "function") {
        fnc = res[i]
        ary = forFnc()
      } else {
        ary = forAry()
      }
    }
    return ary
    function forAry() {
      for (let i = 0; i < res.length; i++) {
        ary = huchisama.mergeSort(ary, "up", res[i], fnc)
      }
      return ary
    }
    function forFnc() {
      let ans = []
      var arr = ary.map(fnc).sort()
      for (let i = 0; i < arr.length; i++) {
        ary.forEach((it, j) => {
          if (fnc(it) == arr[i]) {
            ans.push(it)
            delete ary[j]
          }
        })
      }
      return ans
    }
  },

  mergeSort: function (ary, order = "up", key, fnc = this.property(key)) {
    // fnc = this.property()
    let res = ary.slice()
    if (res.length <= 1) {
      return res
    }
    let priv = res.shift()
    let left = []
    let right = []
    if (Object.prototype.toString.call(ary[0]) !== "[object Object]") {
      for (let i = 0; i < res.length; i++) {
        if (order == "down") {
          if (res[i] > priv) {
            left.push(res[i])
          } else {
            right.push(res[i])
          }
        } else {
          if (res[i] < priv) {
            left.push(res[i])
          } else {
            right.push(res[i])
          }
        }
      }
    } else {
      for (let i = 0; i < res.length; i++) {
        if (order == "down") {
          if (fnc(res[i]) > fnc(priv)) {
            left.push(res[i])
          } else {
            right.push(res[i])
          }
        } else {
          if (fnc(res[i]) < fnc(priv)) {
            left.push(res[i])
          } else {
            right.push(res[i])
          }
        }
      }
    }
    return this.mergeSort(left, order, key, fnc).concat([priv], this.mergeSort(right, order, key, fnc))
  },

  /**
   * 类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。
   * @param {*} collection 
   * @param {*} iteratees 
   * @param {*} orders 
   */
  orderBy: function (collection, iteratees = this.identity, orders) {
    if (orders.length == 0) {
      return this.sortBy(collection, iteratees)
    }
    for (let i = iteratees.length - 1; i >= 0; i--) {
      if (orders[i] === "asc") {
        collection = this.mergeSort(collection, "up", iteratees[i])
      } else {
        collection = this.mergeSort(collection, "down", iteratees[i])
      }
    }
    return collection
  },

  /**
   * 创建一个分成两组的元素数组，第一组包含predicate返回为 true 的元素，第二组包含predicate（断言函数）返回为 false的元素
   * @param {*} collection 
   * @param {*} predicate 
   */
  partition: function (collection, predicate = this.identity) {
    let result = [[], []]
    let fnc = this.iteratee(predicate)
    collection.forEach(it => {
      if (fnc(it)) result[0].push(it)
      else result[1].push(it)
    })
    return result
  },

  /**
   * 实现 reduce
   * @param {*} collection 
   * @param {*} iteratee 
   * @param {*} accumulator 
   */
  reduce: function (collection, iteratee = this.identity, accumulator) {
    let fnc = this.iteratee(iteratee)
    for (let i in collection) {
      if (accumulator == undefined) {
        accumulator = collection[i]
      } else {
        accumulator = fnc(accumulator, collection[i], i)
      }
    }
    return accumulator
  },

  reduceRight: function (collection, iteratee = this.identity, accumulator) {
    var res = collection.slice()
    let trs = Object.prototype.toString.call(collection)
    if (trs == "[object Object]") {
      res = Object.keys(collection)
    }
    let fnc = this.iteratee(iteratee)
    for (let i = res.length - 1; i >= 0; i--) {
      if (accumulator == undefined) {
        accumulator = res[i]
      } else {
        if (trs == "[object Object]") {
          accumulator = fnc(accumulator, collection[res[i]], res[i])
        } else {
          accumulator = fnc(accumulator, res[i], i)
        }
      }
    }
    return accumulator
  },
}

