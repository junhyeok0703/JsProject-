//유저가 값을 입력
//+버튼을클릭 할일추가
//delete이면 할일삭제
//check버튼을 누르면 할일이 끝나 밑줄감
//진행중 끝남 탭을 누르면 언더바이동
//끝남탭은 끝난 아이템만 진행중탭은 진행 아이템만
//전체탭을 누르면 모든아이템보여줌

let taskinput = document.querySelector("#task-input");
console.log(taskinput);
let inputbtn = document.querySelector("#input-btn");
console.log(inputbtn);

let taskList = [];
inputbtn.addEventListener("click", addtask);
function addtask() {
  console.log("check");
  if (taskinput.value == "") {
    alert("할일을 입력해주세요.");
    return 0;
  }
  let taskValue = taskinput.value;
  taskList.push(taskValue);
  console.log(taskList);
  taskinput.value = "";
  render();
}
function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `  
    <div class="tasks">
      <div>${taskList[i]}</div>
      <div>
        <button>체크</button>
        <button>식제</button>
      </div>
    </div>`;
  }
  document.querySelector("#task-board").innerHTML = resultHTML;
}
