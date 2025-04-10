// http 服务启动
// 内置的http模块
// commonjs 规范 es6模块化
const http = require('http');
const users = [
    {
        id: 1,
        name: 'zs',
    },
    {
        id: 2,
        name: 'ls',
    }

]

const server = http.createServer((req, res) => {

    res.end("callback(" + JSON.stringify(users) + ")");
})
server.listen(3000, () => {
    console.log('服务启动成功');
})