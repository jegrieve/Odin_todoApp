const todoData = (todoArr) => {
        const todoObj = {}
        todoArr.forEach((el, i) => {
                switch (i) {
                        case 0:
                        todoObj.title = el;
                        break;
                        case 1:
                        todoObj.description = el;
                        break;
                        case 2:
                        todoObj.dueDate = el;
                        break;
                        case 3:
                        todoObj.priority = el;
                        break;
                }
        });
        return todoObj;
};

export default todoData;