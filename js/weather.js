const API_KEY = "";

function onGeoOk(position){
  const lat = position.coords.latitude;       //위도
  const lon = position.coords.longitude;     //경도
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;    //units=metric 회씨->섭씨
  /*
  fetch(url) : JS가 url을 요청하도록 함. (대기상태)
  then(response => response.json()) : base, clouds, cod, 등 날씨 API의 모든 정보가 다 JSON
  then(data => { console.log(data.name, data.weather[0].main);}) : 내용 추출해 원하는 data 얻음
  */
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

/* 브라우저에서 위치 좌표를 줌 (WiFi, 위치, GPS 등)
getCurrentPosition(모든 게 잘 됐을 때 실행 함수, 에러 시 실행 함수) */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);