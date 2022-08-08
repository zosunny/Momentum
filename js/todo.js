const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));   //JSON.stringify는 JS Object나 array나 어떤 JS간에 string으로 만듦
}

function deleteToDo(e){
  const li = e.target.parentElement;  //target = HTML element 여기서 target은 button이고 parentElemet는 button의 li
  li.remove();                        //parentElement = HTML element의 속성들 중 하나로 클릭된 element의 부모를 가리킴
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);     //<li><span></span></li> 로 만들어줌
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;    // 값 저장하고
  toDoInput.value = "";               // 비움
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);