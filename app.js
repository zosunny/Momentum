const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");      // longinForm은 HTML element로
const loginButton = loginForm.querySelector("button");    // HTML element 안을 바로 검색 가능하게 함
//const loginInput = document.querySelector("#login-form input");   // 이렇게 한줄로도 작성 가능
//const loginButton = document.querySelector("#login-form button");

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


function onLoginSubmit(e){          // 지금 막 벌어진 일들에 대한 정보가 된다.
  e.preventDefault();               // 누군가 form을 submit하면 브라우전느 기본적으로 페이지를 새로고침 한다.
  console.log(e)                    // preventDefault는 이러한 기본 동작을 막는다
}

loginForm.addEventListener("submit", onLoginSubmit)   // 모든 EventListener function의 첫번째 argument는