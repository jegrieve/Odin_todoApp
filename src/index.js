import "./main.scss";
import listDataHandlers from "./listDataHandlers.js"
import listInputFunctions from "./listInputFunctions.js"
import todoInputFunctions from "./todoInputFunctions.js"
import todoData from "./todoData.js"
import todoItemInfo from "./todoItemInfo.js"
import {getLocalStorage, updateLocalStorage, checkLocalStorage, clearLocalStorage} from "./localStorage.js"

checkLocalStorage(listDataHandlers);

const clearLocalStorageBtn = document.getElementById("clear-local-storage-btn")
clearLocalStorageBtn.addEventListener("click", function(e) {
    clearLocalStorage();
    listDataHandlers.deleteListItems();
    listDataHandlers.renderListItems();
    listDataHandlers.refreshDom("run");
    document.getElementById("project-list").innerHTML = "";
    document.querySelector(".todo-info-name").innerHTML = "";
    document.querySelector(".todo-info-list").innerHTML = "";
});


const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", listInputFunctions.openListInput);

const closeListBtn = document.getElementById("close-list-btn");
closeListBtn.addEventListener("click", listInputFunctions.closeListInput);

const submitListBtn = document.getElementById("submit-list-input") 

submitListBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (document.getElementById("add-project-input").value.trim().length > 0) {
        e.preventDefault();
        listDataHandlers.addListItem(listInputFunctions.submitListInput());
        listInputFunctions.resetListInput(); 
        listDataHandlers.renderListItems();
        updateLocalStorage(listDataHandlers);
    }
})

const projectListItems = document.getElementById("project-list");
projectListItems.addEventListener("click", function(e) {
    if (!e.target.id.includes("pp")) {
        document.querySelector(".todo-info-name").innerHTML = "";
        document.querySelector(".todo-info-list").innerHTML = "";
        listDataHandlers.renderTodoList(Number(e.target.id.substring(1)));
        document.getElementById("add-todo-btn").style.display = "block";
    } else {
        listDataHandlers.deleteProject(Number(e.target.id.substring(2)));
        listDataHandlers.refreshDom(Number(e.target.id.substring(2)));
        updateLocalStorage(listDataHandlers);
    }
})

const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", todoInputFunctions.openTodoInput);

const closeTodoBtn = document.getElementById("close-todo-btn");
closeTodoBtn.addEventListener("click", todoInputFunctions.closeTodoInput);

const submitTodoBtn = document.getElementById("submit-todo-input") 
submitTodoBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (document.getElementById("add-todo-input").value.trim().length > 0 
    && document.getElementById("add-todo-description").value.trim().length > 0
    && document.getElementById("add-todo-due-date").value.trim().length >= 10) {
    e.preventDefault();
    let todoListId = Number(document.querySelector(".todo-list").id.substring(1))
    listDataHandlers.addTodoItem(todoData(todoInputFunctions.submitTodoInput()), todoListId);
    todoInputFunctions.resetTodoInput();
    listDataHandlers.renderTodoList(todoListId);
    updateLocalStorage(listDataHandlers);
    };
})

const todoItemInfoList = document.querySelector(".todo-list");
todoItemInfoList.addEventListener("click", function(e) {
    if (e.target.id[0] !== "b") {
        document.querySelector(".todo-info-list").innerHTML = "";
        todoItemInfo.renderTodoInfo(listDataHandlers.getTodoInfo(e.target.id, Number(todoItemInfoList.id.substring(1))));
    } else {
        todoItemInfoList.innerHTML = "";
        listDataHandlers.deleteTodo(Number(todoItemInfoList.id.substring(1)), Number(e.target.id.substring(1)));
        document.querySelector(".todo-info-list").innerHTML = "";
        document.querySelector(".todo-info-name").innerHTML = "";
        updateLocalStorage(listDataHandlers);
    }
});

//I need to append a button to the todoiteminfo
//This edit button will have an id based on project id and todo id (e00 for project 1 todo 1)
//This edit button will then bring up a replica input for the todo with the prefilled values
//This will then be the new values for that specific todo in that specific project
//Then the todoinfo dom will refresh for that particular todo

//Also.. one last thing: if todo info priority is high make the div red
//If it is low make it light blue;