function addTask() {
    if (activity.value === "") {
        alert("Please enter an activity");
    } else {
    const newLi = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    newLi.innerText = activity.value + " ";
    newLi.appendChild(removeBtn);
    ul.append(newLi);
    }
}

function deleteTask() {
    ul.addEventListener("click", function (e){
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });
} 

function completeTask() {
    ul.addEventListener("click", function(e){
        if (e.target.tagName === "LI"){
            e.target.style.textDecoration = "line-through";
        }
    });
}


const form = document.querySelector("#todoForm");
const activity = document.querySelector("input[name='activity']")
const ul = document.querySelector("ul");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
    completeTask();
    deleteTask();
    activity.value = "";
    
})


//localStorage.setItem("toDoList", ul.innerHTML);
//    const information = localStorage.getItem("toDoList");
 //   if (information) {
 //       ul.innerHTML = information;
 //   }
