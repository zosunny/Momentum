const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()  // website가 load되자마자 getClock 바로 실행하도록! (1초 안기다려도 됨)
setInterval(getClock, 1000);   // 1000ms = 1초 마다 함수 호출
//setTimeout(sayHello, 5000);