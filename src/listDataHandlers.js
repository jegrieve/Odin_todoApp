const listData = (() => {
    const listItems = [];
    const addListItem = (projectTitle) => {
        listItems.push({projectTitle: projectTitle, 
            todos: ["todo1","todo2","todo3"] // this will be created with factory
        });
    };
    const addListIds = () => {
        listItems.forEach((el, i) => {
            el.id = i;
        });
    };
    const renderListItems = () => {
        const projectList = document.getElementById("project-list");
        projectList.innerHTML = "";
        addListIds();
        listItems.forEach((el) => {
            const elDiv = document.createElement("div");
            elDiv.innerHTML = el.projectTitle;
            elDiv.id = "p" + el.id;
            elDiv.classList.add("todo-project");
            projectList.appendChild(elDiv)
        });
    };
    const renderTodos = (id) => { //need to change this later
        const oldId = id;
        id = Number(id.substring(1));
        const projectListObj = listItems[id];
        const projectTodos = document.querySelector(".todo-list");
        projectTodos.id = oldId;
        projectTodos.innerHTML = "";

        projectListObj.todos.forEach((el, i) => {
            const todoItem = document.createElement("div");
            todoItem.innerHTML = projectListObj.todos[i];
            todoItem.id = i; 
            projectTodos.appendChild(todoItem);
        })
    }
    return {listItems, addListItem , renderListItems, renderTodos}
})();

export default listData;