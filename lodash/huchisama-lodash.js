
var huchisama = {
  chunk: function (array, size = 1) {
    let arr = array.slice(0)
    let count = []
    for (let i = size; i <= arr.length; i = size) {
      count.push(arr.splice(0, i))
    }
    if (array.length !== 0) {
      count.push(arr)
    }
    return count
  }
}
