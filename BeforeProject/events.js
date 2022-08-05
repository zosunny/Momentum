//html body에 넣는 코드
  // <div class="hello">
  //   <h1>CLick me!</h1>
  // </div>

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  h1.style.color = "blue";
  console.log("h1 was clicked!");
}

function handleMouseEnter(){
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}

h1.addEventListener("click", handleTitleClick);  // user가 title을 click하면 handleTitleClick 실행시킴
h1.onclick = handleTitleClick;   // 위와 동일하게 동작함!
h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;
// addEventeListener을 선호하는 이유는 .removeEventListener 로 이벤트리스너를 제거할 수 있기 때문이다



// 윈도우 이벤트 함수 - "window - Web APIs MDN" 에서 윈도우 이벤트 함수 확인 가능
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!");
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);    // 와이파이 연결이 해제되면
window.addEventListener("online", handleWindowOnline);      // 와이파이가 연결되면