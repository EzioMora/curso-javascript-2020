// run time node
let a = 3;

console.log(a);
console.log(this.a);

global.b = 457;
this.d = false;
this.e = "test";

console.log(global.b);
console.log(this.d);
console.log(module.exports.d);
console.log(module.exports === this);
console.log(global === this);
console.log(module.exports);

