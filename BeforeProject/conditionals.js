// 1.
// prompt: 질문하고 값을 입력하게 하는 것
// 입력하지 않으면 null
// prompt를 사용하지 않는 이유: 메시지가 이쁘지 않고 CSS 적용이 불가하다.
// 어떤 브라우저는 이러한 팝업을 제한하기도 한다.
const age1 = prompt("How ald are you?")
console.log(age1)


// 2.
// 스트링을 숫자로 변환
// parseInt() : string -> number
// 만약 입력값이 aaabbb와 같다면 이는 숫자가 아니므로 NaN(Not a Number) 이 나온다.
const age2 = prompt("How ald are you?");
console.log(typeof age2);    // string 타입임
console.log(typeof parseInt(age2));    // number 타입으로 변환 함


// 3. 다음과 같은 방법도 가능
const age3 = parseInt(prompt("How ald are you?"));
console.log(age)





//----------------------------------------------------------------------





// 1.
// inNaN
const age4 = parseInt(prompt("How ald are you?"));
console.log(isNaN(age4));     // number가 아니면 true, number면 false 반환


// // 2. condition
// if(condition){
//   condition === true
// }else{
//   condition === false
// }

const age5 = parseInt(prompt("How ald are you?"));
if(isNaN(age5)){            // number가 아니면 true, number면 false 반환
  console.log("Please write a number");
}else{
  console.log("Thank you for writing your age.");
}





//-----------------------------------------------------------------------





// 1. if - else if - else
// 2. && 연산자와 || 연산자
const age6 = parseInt(prompt("How old are you?"));

if(isNaN(age6) || age6 < 0){
  console.log("Please wirte a real positive number");   // real positive number : 양의 정수
}else if(age6 < 18){
  console.log("You are too young");
}else if(age6 >= 18 && age6 <= 60){
  console.log("You can drink");
}else if(age6 > 60 && age6 <= 80){
  console.log("You should exercise");
}else{
  console.log("You are too old");
}