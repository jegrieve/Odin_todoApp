import "./main.scss";
import {openListInput, closeListInput, submitListInput, resetListInput} from "./listInputFunctions.js"

const projectItems = [
    {title: "project1", id: 12312312},
    {title: "project2", id: 12344312},
    {title: "project3", id: 12543645}
];


const addListBtn = document.getElementById("add-list-btn");
addListBtn.addEventListener("click", openListInput);

const closeListBtn = document.getElementById("close-list-btn");
closeListBtn.addEventListener("click", closeListInput);

const submitListBtn = document.getElementById("submit-list-input") 
submitListBtn.addEventListener("click", function(e) {
    e.preventDefault();
    submitListInput(); // add this value to the objectArray
    resetListInput(); 
                        // render the projectList
})
