const checkLocalStorage = (listDataHandler) => {
    if (localStorage.length !== 0) {
        getLocalStorage(listDataHandler);
    };
};

const getLocalStorage = (listDataHandler) => {
    let storageKeys = Object.keys(localStorage);
    storageKeys.sort();
    storageKeys.forEach((i) => {
        let retrievedObject = localStorage.getItem(i);
        listDataHandler.listItems.push(JSON.parse(retrievedObject))
    });
    listDataHandler.renderListItems();
};

const updateLocalStorage = (listDataHandler) => {
    localStorage.clear();
    listDataHandler.listItems.forEach((project, i) => {
        let stringifiedProject = JSON.stringify(project);
        localStorage.setItem(i, stringifiedProject)
    });
    listDataHandler.renderListItems();
};

const clearLocalStorage = () => {
    localStorage.clear();
}


export {getLocalStorage, updateLocalStorage, checkLocalStorage, clearLocalStorage}