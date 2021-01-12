const todoItemInfo = (() => {

    const renderTodoInfo = (todoObj) => {
        let i = 1;
        let arr = ["Todo: " + todoObj.title, "Description: " + todoObj.description, "Duedate: " + todoObj.dueDate, "Priority level: " + todoObj.priority]
        const todoInfoList = document.querySelector(".todo-info-list");
        document.querySelector(".todo-info-name").innerHTML = arr[0];
        while (i < 4) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = arr[i];
            newDiv.classList.add("todo-item-info");
            todoInfoList.appendChild(newDiv);
            i++;
        }
    };
    return {renderTodoInfo};
})();

export default todoItemInfo;