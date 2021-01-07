import "./main.scss";
import listData from "./listDataHandlers.js"
import listInputFunctions from "./listInputFunctions.js"
import todoInputFunctions from "./todoInputFunctions.js"
import todoDataHandlers from "./todoDataHandlers.js"



//DOM stuff
//Todolist input buttons
const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", listInputFunctions.openListInput);

const closeListBtn = document.getElementById("close-list-btn");
closeListBtn.addEventListener("click", listInputFunctions.closeListInput);

const submitListBtn = document.getElementById("submit-list-input") 
submitListBtn.addEventListener("click", function(e) {
    e.preventDefault();
    listData.addListItem(listInputFunctions.submitListInput()); // add this value to the objectArray
    listInputFunctions.resetListInput(); 
    listData.renderListItems();
})

const projectListItems = document.getElementById("project-list");
projectListItems.addEventListener("click", function(e) {
    if (e.target.id) {
        listData.renderTodoList(e.target.id);
    }
})

//Todo input buttons
const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", todoInputFunctions.openTodoInput);
const closeTodoBtn = document.getElementById("close-todo-btn");
closeTodoBtn.addEventListener("click", todoInputFunctions.closeTodoInput);
const submitTodoBtn = document.getElementById("submit-todo-input") 
submitTodoBtn.addEventListener("click", function(e) {
    e.preventDefault();
    listData.addTodoItem(todoDataHandlers.newTodo(todoInputFunctions.submitTodoInput()));
    todoInputFunctions.resetTodoInput();
    listData.renderTodoList();
})
//DOM STUFF


//addlistitem should add the listitem to the listitemsArray
//renderListItems should go through the listItems array and create divs +
//append to the #projectList