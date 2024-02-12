/*  - 유저는 숫자를 입력할 수 있다.
    - 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 UP!이라고 알려준다.
    - 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다.
    - 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That's right이라고 뜨고 게임이 종료된다.
    - 유저는 총 5번의 기회가 있다.
    - 게임이 종료되면 버튼은 비활성화된다.
    - 리셋버튼을 누르면 게임이 초기화된다.
    - 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
    - 유저가 이미 입력한 값을 또 입력할 시에 경고 메세지가 뜬다.
    - 반응형 UI - 미디어 쿼리*/

//랜덤번호 지정
//유저 번호 입력 go버튼을 누르기
let computerNum = 0;

let chance = 5;
let chanceView = document.querySelector("#chance");
let usernum = document.getElementById("usernum");
let playbtn = document.getElementById("bth");
let viewnum = document.getElementById("viewnum");
let resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click", reset);
let isNum = false;
let num = [];
// esaymade;
// hardmade;

playbtn.addEventListener("click", play);
function reset() {
  playbtn.disabled = false;
  pickRandomNum();
  usernum.value = "";
  chance = 5;
  viewnum.textContent = "다시! 처음부터!";
  chanceView.textContent = `남은기회는 단.. ${chance}번`;
}
function play() {
  userValue = usernum.value;
  isNum = false;
  if (usernum.value == "") {
    alert("입력을 안하셨어요.");
    return 0;
  }
  if (num.length == 0) {
    num.push(userValue);
    chance -= 1;
  } else {
    for (let i = 0; i < num.length; i++) {
      if (num[i] == userValue) {
        viewnum.textContent = "이미 입력한 번호임";
        usernum.value = "";
        return 0;
      }
    }
    num.push(userValue);
    chance -= 1;
  }
  if (userValue < computerNum) {
    viewnum.textContent = "up";
  } else if (userValue > computerNum) {
    viewnum.textContent = "down";
  } else {
    viewnum.textContent = "맞췄습니다.";
  }

  chanceView.textContent = `남은기회는 단.. ${chance}번`;
  usernum.value = "";

  if (chance == 0) {
    playbtn.disabled = true;
    viewnum.textContent =
      "기회가 다끝났어요 ㅠㅠ 다시 하시려면 리셋버튼을 눌러주세요~!";
  }
}

console.log(usernum);
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log(computerNum);
}
pickRandomNum();
