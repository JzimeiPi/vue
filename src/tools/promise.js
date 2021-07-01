/**
 * 实现promise
 */
// 三个状态、三个回调函数、两个函数入参



/**
 * Promise
 */
new Promise((resolve, reject) => {
  reject('err')
})
  .then(
    res => {
      console.log('fulfilled', res)
    },
    err => {
      console.log('rejected', err)
    }
  )
  .catch(err => {
    console.log('rejected catch', err)
  })
  .finally(() => {
    console.log('finally', 1)
  })