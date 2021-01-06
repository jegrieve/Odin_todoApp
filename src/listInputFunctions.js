const listInputFunctions = (() => {
    const openListInput = () => {
        document.getElementById("add-project").style.display = "block";
    };
    const closeListInput = () => {
        document.getElementById("add-project").style.display = "none";
    };
    const submitListInput = () => {
        return document.getElementById("add-project-input").value
    };
    const resetListInput = () => {
        const projectInput = document.getElementById("add-project-input");
        projectInput.value = "";
        closeListInput();
    };
    return {openListInput, closeListInput, submitListInput, resetListInput};
})();

//Make the project-todos id div into a class
//Then make the project-todos have the same ID that would be found on the project itself
//Example id = "0" class = todo-project
//When we click on it, make a new project list with id = "p0" for example
//Then we know that the todos are associated with p0


export default listInputFunctions;