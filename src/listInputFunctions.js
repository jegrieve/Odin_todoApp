const listInputFunctions = (() => {
    const openListInput = () => {
        document.getElementById("add-project").style.display = "block";
    };
    const closeListInput = () => {
        document.getElementById("add-project").style.display = "none";
    };
    const submitListInput = () => {
        return document.getElementById("add-project-input").value;
    };
    const resetListInput = () => {
        document.getElementById("add-project-input").value = "";
        closeListInput();
    };
    return {openListInput, closeListInput, submitListInput, resetListInput};
})();


export default listInputFunctions;