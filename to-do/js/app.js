// Select elements
const clear = document.querySelector(".clear");

const dateElement = document.getElementById("date"); //will show today's date

const list = document.getElementById("list"); //where our item lives

const input = document.getElementById("input"); //so it can get what the user types into field

console.log(input);

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show today's date
const today = new Date(); // Today is an object, the new Date

const options = { weekday: "long", month: "short", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-GB", options); //fetches the date

const todos = [];

function addToDo(toDo) {
  //   const DONE = done ? CHECK : UNCHECK;
  console.log("todos.includes(toDo)", todos.includes(toDo));
  console.log("todos", todos);
  console.log("toDo", toDo);

  if (!todos.includes(toDo)) {
    const item = `<li class="item">
            <i class="fa fa-circle-thin co" job="complete" id="0"></i>
            <p class="text">${toDo}</p>
            <i class="fa fa-trash-o de" job="delete" id="0"></i>
          </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
    todos.push(toDo);
  } else {
    alert("got that ");
    return;
  }
}

//create an array

// add item to the list when user hits enter key
document.addEventListener("keyup", function (even) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo);
    }
    input.value = "";
  }
});

//check if same input has been entered twice
