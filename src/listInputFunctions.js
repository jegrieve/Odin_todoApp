const listInputFunctions = (() => {
    const openListInput = () => {
        document.getElementById("add-project").style.display = "block";
        document.querySelector("body").style.pointerEvents = "none";
        document.getElementById("add-project").style.pointerEvents = "auto";
        document.getElementById("add-project-input").focus();
    };
    const closeListInput = () => {
        document.getElementById("add-project").style.display = "none";
        document.querySelector("body").style.pointerEvents = "auto";
    };
    const submitListInput = () => {
        document.querySelector("body").style.pointerEvents = "auto";
        return document.getElementById("add-project-input").value;
    };
    const resetListInput = () => {
        document.getElementById("add-project-input").value = "";
        closeListInput();
    };
    return {openListInput, closeListInput, submitListInput, resetListInput};
})();


export default listInputFunctions;