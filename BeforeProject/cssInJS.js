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
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//   //h1.className = "active";      // h1.className는 getter이면서 setter
//   const clickedClass = "active";  // 변수 사용으로 에러 방지
//   if(h1.className === clickedClass){
//     h1.className = "";
//   }else{
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);





//3.
const h1 = document.querySelector("div.hello:first-child h1");

// html에 이미 class를 지정해둔 경우 class명을 바꾸는 이벤트를 실행시 기존 class의 담긴게 사라지는 에러 발생 ex.글꼴
// 따라서 contains 를 사용!
function handleTitleClick(){
  const clickedClass = "active";
  // if(h1.classList.contains(clickedClass)){    // contains : 우리가 명시한 class가
  //   //h1.className = "";                      // HTML element의 class에 포함되어 있는지 말해줌
  //   h1.classList.remove(clickedClass);        // 전체가 아닌 특정 className만 찾아 변경
  // }else{
  //   //h1.className = clickedClass;
  //   h1.classList.add(clickedClass);           // 전체가 아닌 특정 className만 찾아 변경
  // }

  // 위 모든 것을 toggle을 이용해 단 1줄로 작성할 수 있음!!!
  // toggle은 토큰을 제거하거나 추가한다.
  h1.classList.toggle("active");    // h1의 classList에 clickedClass(여기선 active)
}                                   // 가 있는지 확인해서 있으면 toggle이 active를 제거
                                    // 없다면 toggle이 active를 추가
h1.addEventListener("click", handleTitleClick);