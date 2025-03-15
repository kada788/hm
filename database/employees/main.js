// commonjs node 早期模块化方案 
// js 早期没有模块化方案
// 函数、类 
const sqlite3 = require('sqlite3');
// 后端逻辑和数据库逻辑是分开的
// 数据库操作句柄
// 路径
const db = new sqlite3.Database('./mydatabase.db',
    async (err) => {
        // node js 快 ms级别
        // 数据库 别的服务器/硬盘上 秒 级别的
        if (err) {
            console.log('数据库连接失败', err);
            return;
        }
        console.log('数据库连接成功')
        await db.run(`
     CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY ,
        name TEXT NOT NULL,
        department TEXT NOT NULL,
        salary INTEGER NOT NULL
        )`)
    }
)