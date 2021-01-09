import "./main.scss";
import listDataHandlers from "./listDataHandlers.js"
import listInputFunctions from "./listInputFunctions.js"
import todoInputFunctions from "./todoInputFunctions.js"
import todoData from "./todoData.js"



//DOM stuff
//Todolist input buttons
//FROM HERE
const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", listInputFunctions.openListInput);

const closeListBtn = document.getElementById("close-list-btn");
closeListBtn.addEventListener("click", listInputFunctions.closeListInput);

const submitListBtn = document.getElementById("submit-list-input") 
submitListBtn.addEventListener("click", function(e) {
    e.preventDefault();
    listDataHandlers.addListItem(listInputFunctions.submitListInput()); // add this value to the objectArray
    listInputFunctions.resetListInput(); 
    listDataHandlers.renderListItems();
})

const projectListItems = document.getElementById("project-list");
projectListItems.addEventListener("click", function(e) {
    if (e.target.id) {
        listDataHandlers.renderTodoList(Number(e.target.id.substring(1)));
        document.getElementById("add-todo-btn").style.display = "block";
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
    let todoListId = Number(document.querySelector(".todo-list").id.substring(1))
    listDataHandlers.addTodoItem(todoData(todoInputFunctions.submitTodoInput()), todoListId);
    todoInputFunctions.resetTodoInput();
    listDataHandlers.renderTodoList(todoListId);
})
//DOM STUFF
