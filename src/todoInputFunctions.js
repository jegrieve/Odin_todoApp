const todoInputFunctions = (() => {
    const openTodoInput = () => {
        document.getElementById("add-todo").style.display = "block";
    }
    const closeTodoInput = () => {
        document.getElementById("add-todo").style.display = "none";
    }
    return {openTodoInput, closeTodoInput}
})();

export default todoInputFunctions;