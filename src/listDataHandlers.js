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
            listDiv.innerHTML = addProjectBullet() + " " + list.title;
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
           todo.innerHTML = addBullet() + " " + todoObj.title;
           todo.id = i;
           todo.classList.add("todo");
            listTodos.appendChild(todo);
        });
    };
    const addTodoItem = (todoObj, listItemId) => {
        listItems[listItemId].todos.push(todoObj);
    }
    const addBullet = () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>`
    }

    const addProjectBullet = () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>`
    }

    return {listItems, addListItem, renderListItems, renderTodoList, addTodoItem}
})();

export default listDataHandlers;