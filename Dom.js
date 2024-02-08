let inp = document.querySelector("input");
let btn = document.querySelector("button")
let list = document.querySelector("ul");

function addTask() {
    let task = inp.value;
    if (task.length > 0) {
        let item = document.createElement("li");
        let delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.classList.add("remove");
        item.innerText = task;
        item.appendChild(delBtn);
        list.appendChild(item);
        inp.value = "";
    }
    else {
        alert("task cannot be empty")
    }
}
btn.addEventListener("click", addTask);
inp.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addTask();
    }
});

list.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        // so when delete button is clicked ,we need to delete its parent class
        let ListItem = event.target.parentElement;
        ListItem.remove();
    }
})

