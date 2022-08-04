//1.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  //console.log(h1.style.color);    //getter : 정보 가져옴
  //h1.style.color = "blue";
  //console.log(h1.style.color);    //setter : 정보 가져옴

  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);