const quotes = [
  {
    qoute: "바다도 작은 물방울들로 만들어졌다.",
    author: "마더 테레사"
  },
  {
    qoute:"늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을",
    author: "에이브러햄 링컨"
  },
  {
    qoute:"쓰러지느냐, 쓰러지지 않느냐가 중요한 것이 아니라 쓰러졌을 때 다시 일어나는 것이 중요하다.",
    author: "빈스 롬바르디"
  },
  {
    qoute:"시간이 해결해 준다는 말이 있긴 하지만, 실제로 일을 변화시켜야 하는 것은 바로 당신이다.",
    author: "앤디 워홀"
  },
  {
    qoute:"만약 누군가를 당신의 편으로 만들고 싶다면, 먼저 당신이 그의 진정한 친구임을 확신시켜라.",
    author: "에이브러햄 링컨"
  },
  {
    qoute:"인내는 쓰지만 그 열매는 달다",
    author: "아리스토텔레스"
  },
  {
    qoute:"누군가 너에게 어떠한 일을 할 수 있느냐고 물을 때마다 '물론 나는 할 수 있다'라고 대답해라. 그리고 할 수 있는 방법을 바쁘게 찾아라.",
    author: "시어도어 루즈벨트"
  },
  {
    qoute:"당신이 꾸준히 하는 일이 당신이 누구인지 말해준다. 휼륭함이란 우연히 이루는 것이 아니라 몸에 밴 습관으로 이루어진 것이다.",
    author: "아리스토텔레스"
  },
  {
    qoute:"사람은 할 말이 없게 되면 욕을 한다.",
    author: "볼테르"
  },
  {
    qoute:"자기 연민은 최악의 적이다. 그런 감정에 굴복하여 산다면 어떠한 것도 이루어낼 수 없다.",
    author: "요한 볼프강 폰 괴테"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;
