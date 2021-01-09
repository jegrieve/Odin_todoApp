const listDataHandlers = (() => {
    const listItems = []; //This is where listobjs are stored

    const addListItem = (title) => {// This is where listObjs are added
        listItems.push({title: title, 
                        todos: [],
                        id: null
        });
    };

    const addListIds = () => {//Gives each list an id corresponding to position in array
        listItems.forEach((list, i) => {
            list.id = i;
        })
    }

    const renderListItems = () => {//Renders the list items under project-list div
        const projectList = document.getElementById("project-list");
        projectList.innerHTML = "";
        addListIds();

        listItems.forEach((list) => {
            const listDiv = document.createElement("div");
            listDiv.innerHTML = list.title;
            listDiv.id = "p" + list.id;
            listDiv.classList.add("todo-project");
            projectList.appendChild(listDiv)
        });
    };
    const renderTodoList = (id) => {// this will render each todo from a list
        const projectList = listItems[id];
        const listTodos = document.querySelector(".todo-list");
        document.querySelector(".todo-list-name").innerHTML = projectList.title + " todolist:";
        listTodos.id = "t" + id;
        listTodos.innerHTML = "";
        renderTodos(projectList, listTodos);
    };
    const renderTodos = (projectList, listTodos) => {
        projectList.todos.forEach((todoObj, i) => {
           const todo = document.createElement("div");
           todo.innerHTML = todoObj.title;
           todo.id = i;
           todo.classList.add("todo");
            listTodos.appendChild(todo);
        })
    }

    return {listItems, addListItem, renderListItems, renderTodoList}
})();

export default listDataHandlers;