let s = "hello world"
for(let i = 0; i < s.length; ++i) {
    let ch = s[i]
    console.log(ch);
}

let rectangle = {
    width: 5,
    height: 7,
    area : function() { return this.width * this.height; }
};

for (let key in rectangle){
    let value = rectangle[key];
    console.log("%s: %s", key, value);
}