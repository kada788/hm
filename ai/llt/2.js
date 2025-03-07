function fn() {
    return Math.ceil(Math.random() * 27 + 18);
}
for (let i = 0; i < 20; i++)
    console.log(fn());