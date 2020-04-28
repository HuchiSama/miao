
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

  compact: function (array) {
    let count = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        count.push(array[i])
      }
    }
    return count
  }





}
