const textFeld = document.getElementsByClassName("todo-Text");
const addTodo = document.querySelector(".add-Todos");
const deletbtn =document.querySelector(".delete-Todos");


const state ={[]};




addTodo.addEventListener("click" , addList); 

deletbtn.addEventListener("click" , () => {
    console.log("delete");

});



function addList() {
 const newEl = document.createElement("ul");
const nn =  newEl.innerHTML = "lerne";
  newEl.appendChild(nn);
     
}