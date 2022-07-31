//player information

//일일이 나열 좋은 방법 아님. 데이터 접근이 쉽지 않음
//const playerName = "sunny";
//const playerPoints = 12345;
//const playerHandsome = true;
//const playerFat = "little bit";

//각각의 값들이 무엇을 가리키는 값인지 모름. 주석으로 알려주어야 함
//const player = ["sunny", 12345, true, "little bit"]

//Object 사용
const player = {
  name: "sunny",
  points: 100,
  fat: true,
};
//데이터 특정 값 출력
console.log(player);
console.log(player.name);
console.log(player["name"]);

//데이터 업데이트
player.fat = false;    // object안의 값을 수정하는 것이므로 const와 상관 없음
console.log(player);

//포인트 + 15
player.points += 15;
console.log(player.points);

//데이터 추가
player.lastName = "lemon"; 
console.log(player);