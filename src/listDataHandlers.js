const listData = (() => {
    const listItems = [];
    const addListItem = (projectTitle) => {
        listItems.push({projectTitle: projectTitle, 
            todos: [{title: "todo1"}]
        });
    };
    const addListIds = () => {
        listItems.forEach((el, i) => {
            el.id = i;
        })
    };

    const addTodoIds = () => {
        listItems.forEach((el, i) => {
            el.todos.forEach((el, i) => {
                el.id = i;
            })
        })
    }

    const addTodoItem = (todo) => {
        const currentListId = Number(document.querySelector(".todo-list").id.substring(1))
        listItems[currentListId].todos.push(todo);
        }

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
    const renderTodoItems = () => {
        const todoList = document.querySelector(".todo-list")
        todoList.innerHTML = "";
        addTodoIds();
        listItems.forEach((el) => {
            el.todos.forEach((todo, i) => {
                const elDiv = document.createElement("div");
                elDiv.innerHTML = todo.title;
                elDiv.id = i;
                elDiv.classList.add("todo");
                todoList.appendChild(elDiv)
            })
        });
    }
    const renderTodoList = (id) => { 
        const oldId = id;
        id = Number(id.substring(1));
        const projectListObj = listItems[id];
        const projectTodos = document.querySelector(".todo-list");
        projectTodos.id = "t" + id;
        projectTodos.innerHTML = "";

        renderTodoItems();
    }
    return {listItems, addListItem , renderListItems, renderTodoList, addTodoItem, renderTodoItems}
})();

export default listData;