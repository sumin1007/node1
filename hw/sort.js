let a = [];

for(let i = 0; i < 100; ++i){
    a[i] = Math.floor(Math.random() * 100 + 1);
}
a.sort(function(a,b){
    return a - b;
});
console.log(a);