const taskInput = document.getElementById("inp");

let temp = "";

taskInput.addEventListener("change", (e) => {
  temp = e.target.value;
  console.log(taskInput.value);
});

const list = document.getElementById("todoList");

function add() {
  let item = document.createElement("li");
  item.innerText = temp;

  console.log(item);
  list.appendChild(item);
}
