// Updated JavaScript (main.js)
let taskinput = document.querySelector("#task-input");
let inputbtn = document.querySelector("#input-btn");
let taskList = [];
let taskBoard = document.querySelector("#task-board");

inputbtn.addEventListener("click", addTask);

function addTask() {
  if (taskinput.value === "") {
    alert("할일을 입력해주세요.");
    return 0;
  }

  let taskValue = taskinput.value;
  let taskObject = { text: taskValue, completed: false };
  taskList.push(taskObject);

  taskinput.value = "";
  render();
}

function render(filteredTasks) {
  let tasksToRender = filteredTasks || taskList;
  let resultHTML = "";
  for (let i = 0; i < tasksToRender.length; i++) {
    resultHTML += `
        <div class="tasks">
            <div class="${tasksToRender[i].completed ? "completed" : ""}">${
      tasksToRender[i].text
    }</div>
            <div>
                <button onclick="checkTask(${i})">체크</button>
                <button onclick="deleteTask(${i})">삭제</button>
            </div>
        </div>`;
  }
  taskBoard.innerHTML = resultHTML;
}

function checkTask(index) {
  taskList[index].completed = !taskList[index].completed;
  render();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  render();
}

function showAllTasks() {
  render();
}

function showInProgressTasks() {
  let inProgressTasks = taskList.filter((task) => !task.completed);
  render(inProgressTasks);
}

function showCompletedTasks() {
  let completedTasks = taskList.filter((task) => task.completed);
  render(completedTasks);
}
