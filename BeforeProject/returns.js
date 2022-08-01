//1.
const calulator = {
  plus: function(a, b){
    console.log(a + b);
  },
  minus: function(a, b){
    console.log(a - b);
  },
  divide: function(a, b){
    console.log(a / b);
  },
  powerof: function(a, b){
    console.log(a ** b);
  },
}
calulator.plus(20, 10);
calulator.minus(20, 10);
calulator.divide(20, 10);
calulator.powerof(20, 10);
console.log(calulator.powerof(20, 10));   // Undefined 출력



//2. 함수 안에서 콘솔 안찍고 return 사용해 값 반환
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;              // return 후 함수 종료. 이후 적힌 코드 작동 X
}
const age = 95;
const krAge = calculateKrAge(age);
console.log(krAge)