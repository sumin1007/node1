let a = [];

for(let i = 0; i < 100; ++i){
    a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);

for(let i = 99; i > -1; --i){
    while(a[i] % 2 == 0)
        a.pop();
}

console.log(a);