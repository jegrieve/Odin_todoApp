function openListInput() { //opens list input
    document.getElementById("add-project").style.display = "block";
}

function closeListInput() { //closes list input
    document.getElementById("add-project").style.display = "none";
}

function submitListInput() { //submit list input
    return document.getElementById("add-project-input").value
}

function resetListInput() { //resets list input form
    const projectInput = document.getElementById("add-project-input");
    projectInput.value = "";
    closeListInput();
}



export {openListInput, closeListInput, submitListInput, resetListInput};