/**
 * setInterval 缺陷
 * 无视代码错误
 */
function a() {
  try {
    cnosole.log('拼写错误 console')
  } catch (e) {
    console.log('err')
  }
}
// setInterval(a, 1000)
// 每隔1s输出 err

/**
 * 无视网络延迟
 */
function testSetInterval() {
  let i = 0
  const start = Date.now()
  const timer = setInterval(() => {
      i++;
      i === 2 && clearInterval(timer)
      console.log(`第${i}次开始`, Date.now() - start)
      for(let i = 0; i < 900000000; i++) {}
      console.log(`第${i}次结束`, Date.now() - start)
  }, 100)
}
testSetInterval()
// 第1次开始 105
// 第1次结束 694    
// 第2次开始 695
// 第2次结束 1263
// 问题：为什么第一次结束 和第二次开始只隔了1ms
// 原因：无视网络延迟，不会管上一次还行结果，定时将要执行的函数放入 异步队列
