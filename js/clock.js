const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");       //padStart는 String에 사용하는 함수
  const minutes = String(date.getMinutes()).padStart(2, "0");   //최대길이는 2로 만들고 남는 자리는 0으로 채운다는 의미
  const seconds = String(date.getSeconds()).padStart(2, "0");   //padStart(maxLength, fillString)
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()  // website가 load되자마자 getClock 바로 실행하도록! (1초 안기다려도 됨)
setInterval(getClock, 1000);   // 1000ms = 1초 마다 함수 호출
//setTimeout(sayHello, 5000);