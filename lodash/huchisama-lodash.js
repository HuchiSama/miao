
var huchisama = {

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
  * @param  {array} value 需要从数组删去的值
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

}
