const textFeld = document.querySelector(".todo-Text");
const addTodo = document.querySelector(".add-Todos");
const deletbtn = document.querySelector(".delete-Todos");
const listContainer = document.querySelector("#listcontainer");
const filterall = document.querySelector("#filter-all");
const filteropen = document.querySelector("#filter-open");
const filterdone = document.querySelector("#filter-done");

const state = {
    todos: [],

};

filteropen.addEventListener("change", (event) => {
    event.preventDefault();
    openfilter();
    rendern();


});




filterdone.addEventListener("change", (event) => {
    event.preventDefault();
    donefilter();
    rendern();

});
filterall.addEventListener("change", (event) => {
    event.preventDefault();
    allfilter();
    rendern();

});

const localTodosObj = JSON.parse(localStorage.getItem("todos"));


if (Array.isArray(localTodosObj)) {
    state.todos = localTodosObj;
}

function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(state.todos));
}


addTodo.addEventListener("submit", (event) => {
    event.preventDefault();
    addList();
    rendern();
    event.target.reset();

});

deletbtn.addEventListener("click", (event) => {
    event.preventDefault();
    deletTodo();
    rendern();

});



function renderitem(todo) {
    const newLi = document.createElement("li");
    const newcheckBox = document.createElement("input");
    newcheckBox.type = "checkbox";
    newcheckBox.checked = todo.done;
    const text = document.createTextNode(todo.description);

    if (todo.done) {
        newLi.classList.toggle("strike-through");
    }
    newcheckBox.addEventListener("change", () => {
        todo.done = !todo.done;
        updateLocalStorage();
        rendern();
    });


    newLi.append(newcheckBox, text);

    return newLi;


}


function addList() {
    if (state.todos.description !== "") {

        state.todos.push({
            id: +new Date(),
            description: textFeld.value,
            done: false,
        });
    }
    updateLocalStorage();

}

function rendern() {

    listContainer.innerHTML = "";
    for (let todo of state.todos) {
        const newTodos = renderitem(todo);
        listContainer.append(newTodos);


    }



};
rendern();


function deletTodo() {
    state.todos = state.todos.filter((todo) => !todo.done);

}

function donefilter() {
    state.todos = state.todos.filter((todo) => todo.done);

}
function openfilter() {
    state.todos = state.todos.filter((todo) => !todo.done);

}


function allfilter() {
    rendern();

}