const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);     //<li><span></span></li> 로 만들어줌
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;    // 값 저장하고
  toDoInput.value = "";               // 비움  
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);