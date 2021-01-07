const todoInputFunctions = (() => {
    const openTodoInput = () => {
        document.getElementById("add-todo").style.display = "block";
    }
    const closeTodoInput = () => {
        document.getElementById("add-todo").style.display = "none";
    }
    const submitTodoInput = () => {
        return document.getElementById("add-todo-input").value;
    }
    const resetTodoInput = () => {
        document.getElementById("add-todo-input").value = "";
        closeTodoInput();
    }
    return {openTodoInput, closeTodoInput, submitTodoInput, resetTodoInput}
})();

export default todoInputFunctions;
