document.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("#todoForm");
const activity = document.querySelector("input[name='activity']")
const ul = document.querySelector("ul");

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
            localStorage["list"] = ul.innerHTML
        }
    });
} 

function completeTask() {
    ul.addEventListener("click", function(e){
        let finishedTask = e.target
        if (!finishedTask.isCompleted){
            finishedTask.style.textDecoration = "line-through";
            finishedTask.isCompleted = true;
            localStorage.setItem("completed", finishedTask.style.textDecoration);
        } else {
            finishedTask.style.textDecoration = "none";
            finishedTask.isCompleted = false;
            localStorage.removeItem("completed");
        }
        
        //if (localStorage["completed"]){
        //   finishedTask.isCompleted;
        //}
    });

    
}

if (localStorage["list"]) {
    ul.innerHTML = localStorage["list"];

}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
    activity.value = "";
    localStorage["list"] = ul.innerHTML;
})

deleteTask();
completeTask();
});