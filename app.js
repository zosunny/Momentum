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