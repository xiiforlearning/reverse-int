module.exports = function reverse (n) {
    const arr = n.toString().split('').reverse()
    if (arr[arr.length - 1] === '-') {
       const result = arr.slice(0, -1).join('')
       return Number(result)
    }
    return Number(arr.join(''))
}
