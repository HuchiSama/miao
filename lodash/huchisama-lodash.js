
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
    let index = 0
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




}
