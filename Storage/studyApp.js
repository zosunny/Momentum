const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");      // longinForm은 HTML element로
const loginButton = loginForm.querySelector("button");    // HTML element 안을 바로 검색 가능하게 함
//const loginInput = document.querySelector("#login-form input");   // 이렇게 한줄로도 작성 가능
//const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";    // 일반적으로 string만 포함된 변수는 대문자로 표기하고
                                      // string을 저장하고 싶을 때 사용 - 일종의 관습
const USERNAME_KEY = "username";      // string을 작성하다 오타가 나면 JS가 지적하지 않지만
                                      // 변수명이 오타가 나면 JS가 에러메시지를 띄운다.

// function onLoginBtnClick(){
//   const username = loginInput.value;
//   console.log(username)
// }

// loginButton.addEventListener("click", onLoginBtnClick)



// function onLoginSubmit(){
//   const username = loginInput.value;
//   console.log(username)
// }

// loginButton.addEventListener("submit", onLoginSubmit)


function onLoginSubmit(e){                // 지금 막 벌어진 일들에 대한 정보가 된다.
  e.preventDefault();                     // 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 한다.
                                          // preventDefault는 이러한 기본 동작을 막는다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);     // 저장공간에 username 저장.
                                                    // local storage는 브라우저가 가지고 있는 작은 DB같은 API
  //greeting.innerText = "Hello " + username;       // string과 변수를 합치는 방법 1
  // greeting.innerText = `Hello ${username}`;      // string과 변수를 합치는 방법 2
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintingGreetings(savedUsername);
}

// function handleLinkClick(e){
//   console.log(e);
//   alert("clicked!");                 // alert가 떠있는 동안 브라우저의 동작 멈춤
// }

loginForm.addEventListener("submit", onLoginSubmit)   // 모든 EventListener function의 첫번째 argument는
//link.addEventListener("click", handleLinkClick)

function paintingGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


// 저장공간에 이름이 있으면 hello + 이름 을 출력하고
// 없으면 이름을 물어보는 input을 화면에 보여줌
if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  // show the greetings
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintingGreetings(savedUsername);
}