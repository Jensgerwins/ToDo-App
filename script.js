const textFeld = document.querySelector(".todo-Text");
const addTodo = document.querySelector(".add-Todos");
const deletbtn = document.querySelector(".delete-Todos");
const listContainer = document.querySelector("#listcontainer");

const state = [];




addTodo.addEventListener("click", addList);

deletbtn.addEventListener("click", () => {
    console.log("delete");

});



function addList() {
    const newEl = document.createElement("ul");

    const newTodo = textFeld.value;
    state.push(newTodo);
    state.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        const button = document.createElement("checkbox");
        button.addEventListener("click", () => {

        })
        button.innerText = "";
        li.appendChild(button);
        newEl.appendChild(li);
    });

    listContainer.innerText = "";
    listContainer.appendChild(newEl);

}