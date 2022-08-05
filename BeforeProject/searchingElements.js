//html body에 넣는 코드
  // <h1 autofocus id="title">Grab me!</h1>
  // <h1 class="hello">Grab</h1>
  // <h1 class="hello">Grab</h1>
  // <h1 class="hello">Grab</h1>
  // <h1 class="hello">Grab</h1>
  // <h1 class="hello">Grab</h1>

//css에 넣는 코드
// body {
//   background-color: beige;
// }

// h1 {
//   color: cornflowerblue;
//   transition: color .5s ease-in-out;
// }

// .active {             /* 이 class를 어떤 element에 지정해주면 */
//   color:tomato;     /* 어떤 element든 tomato색을 가지게 됨 */
// }


document.h1 = "Hello From Js"  // JS로 HTML 정보를 갖고 있는 document 객체 이용해 HTML 변경

const h1 = document.getElementById("h1");

console.dir(h1);

h1.innerText = "Got you!";

console.log(h1.id);          // h1
console.log(h1.className);   // 지정되어있지 않으면 빈 칸 나옴

const hellos = document.getElementsByClassName("hello");   // class = "hello"가 여러개 있으면 배열을 가져다 줌
console.log(hellos);

const h1 = document.querySelector(".hello h1");  // querySelector는 element를 css방식으로 검색할 수 있음
                      // querySelector에서는 hello가 class name이라는 것과 그 안의 h1을 명시해주어야 한다.
const title2 = document.querySelectorAll(".hello h1:fist-child")
                      // querySelectorAll은 selector 안의 조건에 부합하는 모든 element를 가져다 줌
const id1 = document.querySelector("#hello");   // 같은 명령
const id2 = document.getElementById("hello");   // 같은 명령

console.log(h1)

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1)

h1.style.color = "blue";