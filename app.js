// document.h1 = "Hello From Js"  // JS로 HTML 정보를 갖고 있는 document 객체 이용해 HTML 변경

// const h1 = document.getElementById("h1");

// console.dir(h1);

// h1.innerText = "Got you!";

// console.log(h1.id);          // h1
// console.log(h1.className);   // 지정되어있지 않으면 빈 칸 나옴

// const hellos = document.getElementsByClassName("hello");   // class = "hello"가 여러개 있으면 배열을 가져다 줌
// console.log(hellos);

// const h1 = document.querySelector(".hello h1");  // querySelector는 element를 css방식으로 검색할 수 있음
//                       // querySelector에서는 hello가 class name이라는 것과 그 안의 h1을 명시해주어야 한다.
// const title2 = document.querySelectorAll(".hello h1:fist-child")
//                       // querySelectorAll은 selector 안의 조건에 부합하는 모든 element를 가져다 줌
// const id1 = document.querySelector("#hello");   // 같은 명령
// const id2 = document.getElementById("hello");   // 같은 명령

// console.log(h1)

// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1)

// h1.style.color = "blue";



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