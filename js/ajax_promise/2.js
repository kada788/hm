// 实例化时，传递函数，里面装耗时性任务
const p = new Promise((resolve, reject) => {// executor 执行器,立马执行
    console.log('333')// 同步任务
    setTimeout(() => {// 异步任务 event loop

        console.log('2222')
        resolve('BMW325')
        // reject()
    }, 1000)
})
console.log(p.__proto__, p);
p
    .then((data) => {
        // 等到executor 异步任务执行完后，再执行then里面的函数
        console.log('1111')
        console.log(data)
    })
    .catch(() => {
        console.log('error')
    })