const a = 5;   /* const(상수): 바뀌지 않고 계속 유지되는 값 update 불가능*/
const b = 2;
let myName = "sun";   /* 새로운 것을 생성할 때, 이후 값 update 가능 */

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "sunny"
console.log("my new name is " + myName);