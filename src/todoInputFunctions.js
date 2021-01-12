const todoInputFunctions = (() => {
    const openTodoInput = () => {
        document.getElementById("add-todo").style.display = "block";
        document.querySelector("body").style.pointerEvents = "none";
        document.getElementById("add-todo").style.pointerEvents = "auto";
        document.getElementById("add-todo-input").focus();
    }
    const closeTodoInput = () => {
        document.getElementById("add-todo").style.display = "none";
        document.querySelector("body").style.pointerEvents = "auto";
    }
    const submitTodoInput = () => {
        document.querySelector("body").style.pointerEvents = "auto";
        return [document.getElementById("add-todo-input").value,
                document.getElementById("add-todo-description").value,
                document.getElementById("add-todo-due-date").value,
                document.getElementById("add-todo-priority").value
                ];
    };
    const resetTodoInput = () => {
        document.getElementById("add-todo-input").value = "";
        document.getElementById("add-todo-description").value = "";
        document.getElementById("add-todo-due-date").value = "";
        document.getElementById("add-todo-priority").checked = false;
        document.getElementById("add-todo-priority").value = "";
        closeTodoInput();
    }
    return {openTodoInput, closeTodoInput, submitTodoInput, resetTodoInput}
})();

export default todoInputFunctions;
