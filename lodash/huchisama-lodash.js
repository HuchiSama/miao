
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
}
