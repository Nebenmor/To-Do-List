const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.className = "task-item";
        
        // Create task text
        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.innerHTML = inputBox.value;
        li.appendChild(taskText);

        // Create button container
        let buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        // Add edit button
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "task-btn edit-btn";
        buttonContainer.appendChild(editBtn);

        // Add delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "task-btn delete-btn";
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(buttonContainer);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

