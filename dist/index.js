"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
//
function greet(name) {
    console.log("hello" + name);
}
greet("rakesh");
greet(4);
//
function sum1(a, b) {
    return a + b;
}
let ans1 = sum1("1", 3);
console.log(ans1);
//
function sum2(a, b) {
    return a + b;
}
let ans2 = sum2(1, 3);
console.log(ans2);
//
function delaycall(anoFunction) {
    setTimeout(anoFunction, 1000);
}
function log() {
    console.log("hello");
}
delaycall(log);
//
function greet1(user) {
    console.log(user.name);
}
let user = {
    name: "racks",
    age: 22
};
greet1(user);
function greet2(user1) {
    console.log(user1.firstname);
}
let user1 = {
    firstname: "raj",
    lastname: "singh",
    age: 21
};
greet2(user1);
//# sourceMappingURL=index.js.map