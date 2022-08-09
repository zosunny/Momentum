const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];         // todo를 빈값으로 시작. 이후 복원할 수 있도록 만들어야 함

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   //JSON.stringify는 JS Object나 array나 어떤 JS간에 string으로 만듦
}

function deleteToDo(e){
  const li = e.target.parentElement;  //target = HTML element 여기서 target은 button이고 parentElemet는 button의 li
  //console.log(li.id);         //삭제하기 전 li의 id를 얻음
  li.remove();                  //parentElement = HTML element의 속성들 중 하나로 클릭된 element의 부모를 가리킴
  toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));   //삭제 클릭한 li를 제외한 나머지 todo들만 남기고 싶음
                                                              //toDo.id는 number타입이고 li.id는 string타입
  saveToDos();  //toDos DB에서 todo 지운뒤 다시 saveToDos 불러줘야 함
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;                               // li에 id를 만들어줌. 각 todo들의 id로
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);                             // <li><span></span></li> 로 만들어줌
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;    // 값 저장하고
  toDoInput.value = "";               // 비움
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),     //시간을 이용한 랜덤한 숫자를 id로 줌
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {                               // savedToDos가 null이 아니면 즉, 값이 있으면
  const parsedToDos = JSON.parse(savedToDos);   // JSON.parse()는 string을 다시 JS에서 사용 가능한 object로 만듦. 여기선 array로 변환
  toDos = parsedToDos;                          // 이전 toDo들 복원. 새 todo들 입력시 이전 todo들 덮어 써 사라지는 것 방지하고 새 todo는 추가
  parsedToDos.forEach(paintToDo);
}

/*
<A>
function sayHello(item) {           // JS는 지금 처리되고 있는 item 정보를 제공한다.
  console.log("this is", item);
}
parsedToDos.forEach(sayHello);      // forEach는 function을 실행하게하는데 그 array에 있는 각각의 item에 대해 실행해줌


<B>
parsedToDos.forEach((item) => console.log("this is", item));


<A>와 <B>는 동일한 기능을 구현한다. 보다 간결한 <B>를 화살표 함수라고 한다.
*/

