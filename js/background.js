const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];  

const bgImage = document.createElement("img");  //js에서 html에 img태그 push함

bgImage.src = `img/${chosenImage}`;

bgImage.id = "bgImg";

document.body.appendChild(bgImage);   //appenChild()는 body에 html을 추가함.