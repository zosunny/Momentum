//1.
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//   //console.log(h1.style.color);    //getter : 정보 가져옴
//   //h1.style.color = "blue";
//   //console.log(h1.style.color);    //setter : 정보 가져옴

//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue"){
//     newColor = "tomato";
//   }else{
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);




//2.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  //h1.className = "active";      // h1.className는 getter이면서 setter
  const clickedClass = "active";  // 변수 사용으로 에러 방지
  if(h1.className === clickedClass){
    h1.className = "";
  }else{
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);