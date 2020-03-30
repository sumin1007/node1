const MAX = 20, MIN = 10;

for (let i = 0; i < 30; ++i) {
    let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    console.log(a);
}