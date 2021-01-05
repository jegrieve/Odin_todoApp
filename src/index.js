import "./main.scss";
import {openListInput, closeListInput, submitListInput, resetListInput} from "./listInputFunctions.js"
// import {addListItem, renderListItems} from "./listHandlerFunctions.js"

//Make a module
const listItems = [
    // {title: "project1", id: 12312312},
    // {title: "project2", id: 12344312},
    // {title: "project3", id: 12543645}
];

function addListItem(projectTitle) {
    listItems.push({projectTitle: projectTitle});
}

function addListIds() {
    listItems.forEach((el, i) => {
        el.id = i;
    });
}


function renderListItems() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    addListIds();
    listItems.forEach((el) => {
        const elDiv = document.createElement("div");
        elDiv.innerHTML = el.projectTitle;
        elDiv.id = el.id;
        elDiv.classList.add("todo-project");
        projectList.appendChild(elDiv)
    })
}
//Make a module

const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", openListInput);

const closeListBtn = document.getElementById("close-list-btn");
closeListBtn.addEventListener("click", closeListInput);

const submitListBtn = document.getElementById("submit-list-input") 
submitListBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addListItem(submitListInput()); // add this value to the objectArray
    resetListInput(); 
    renderListItems();
})

//addlistitem should add the listitem to the listitemsArray
//renderListItems should go through the listItems array and create divs +
//append to the #projectList