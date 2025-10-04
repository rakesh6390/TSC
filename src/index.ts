let x: number = 1;

console.log(x);

//
function greet(name:string | number){
    console.log("hello"+name);
}

greet("rakesh");
greet(4);

//
function sum1(a:string,b:number){
   return a+b;
}

let ans1=sum1("1",3);
console.log(ans1);

//
function sum2(a:number,b:number){
   return a+b;
}

let ans2=sum2(1,3);
console.log(ans2);

//
function delaycall(anoFunction:()=>void){
    setTimeout(anoFunction,1000);
}

function log(){
    console.log("hello");
}
delaycall(log);

//
function greet1(user:{
    name:string,
    age:number
}){
    console.log(user.name);
}
let user={
  name:"racks",
  age:22
}
greet1(user)

//Interface

interface UserType{
    firstname:string,
    lastname:string,
    age:number
}
function greet2(user1:UserType){
console.log(user1.firstname)
}
let user1:UserType={
  firstname:"raj",
  lastname:"singh",
  age:21
}
greet2(user1)

//type
/*type is a keywortd as interface but it let you define a datatype as string | number where interface dont alow this
finally type let you do union and intersection*/

type usertype = {
    name:string | number,
    age:string | number
}