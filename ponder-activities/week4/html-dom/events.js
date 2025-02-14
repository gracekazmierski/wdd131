let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listItem = document.querySelector('#todoList');
  listItem.innerHTML = ""; // clears existing tasks
  const html = tasks.map(taskTemplate).join(""); // generates HTML for tasks
  listItem.innerHTML = html; // inserts the generated HTML
}

function newTask() {
  const taskInput = document.querySelector("#todo").value; // recieves input value
  tasks.push({ detail: taskInput, completed: false }); // add new task to task[]
  renderTasks(tasks); // renders current task list
  document.querySelector("#todo").value = ""; // clears input
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector('p').innerText
  );
  taskElement.remove(); // removes HTML
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex( // finds tasks
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  // toggles 'completed' 
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike"); // toggles 'strike'
}

function manageTasks(event) {
  const parent = event.target.closest("li"); // gets the parent <li> element
  if (event.target.dataset.function === "delete") {
    removeTask(parent); // removes the task when icon is clicked
  }
  if (event.target.dataset.function === "complete") {
    completeTask(parent); // marks task as completed when icon is clicked
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask); // add task event listener
document.querySelector("#todoList").addEventListener("click", manageTasks); // handle task event listeners

renderTasks(tasks);
