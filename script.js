const textFeld = document.querySelector(".todo-Text");
const addTodo = document.querySelector(".add-Todos");
const deletbtn = document.querySelector(".delete-Todos");
const listContainer = document.querySelector("#listcontainer");
const filterall = document.querySelector("#filter-all");
const filteropen = document.querySelector("#filter-open");
const filterdone = document.querySelector("#filter-done");
const filterInputs =document.querySelectorAll("input[name=radio]");
const state = {
    todos: [],
    filter: [],
};



const localTodosObj = JSON.parse(localStorage.getItem("todos"));
const localFilteOBJ = JSON.parse(localStorage.getItem("filter"));
    if(Array.isArray(localFilteOBJ)){
    state.filter = localFilteOBJ;
}
    if (Array.isArray(localTodosObj)) {
    state.todos = localTodosObj;
}

function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    localStorage.setItem("filter", JSON.stringify(state.filter));
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

filterInputs.forEach(input  => {
    input.addEventListener("change", (event) => {
  
        console.log(event.target.value);
       
    rendern(event.target.value);
        })
})

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

updateLocalStorage();




    

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

function rendern(filter="all") {
let filteredTodos =state.todos;
if(filter === "done") {
filteredTodos = state.todos.filter(todo=> todo.done);
} else if (filter === "open") {
    filteredTodos = state.todos.filter(todo=> !todo.done);

}
    listContainer.innerHTML = "";
    for (let todo of filteredTodos) {
        const newTodos = renderitem(todo);
        listContainer.append(newTodos);


    }

   
   
  }



rendern();


function deletTodo() {
    state.todos = state.todos.filter((todo) => !todo.done);

}

