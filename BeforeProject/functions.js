//1.
function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age + " year's old.");
}
sayHello("sunny", 15);
sayHello("windy", 25);
sayHello("rainy", 35);



//2.
function plus(a, b){
  console.log(a + b);
}
function divide(a, b){
  console.log(a / b);
}
plus(30, 50);
divide(30, 3);



//3. 오브젝트안에서의 함수 사용
const player = {
  name: "sunny",
  sayHi: function(otherPersonsName){
    console.log("hello " + otherPersonsName + ", nice to meet you");
  }
}
console.log(player.name);
player.sayHi("tomato");
player.sayHi("apple");