// async
async function fn() {
  return 'fn'
}
fn().then(res => {
  console.log('async', res)
})

// async await
var c1 = 1
async function fn1() {
  var c2 = await c1
  console.log(2)
  console.log(c1, c2)
}
fn1()