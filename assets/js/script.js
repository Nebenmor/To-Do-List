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

// Handle clicks on list items and buttons
listContainer.addEventListener("click", function(e) {
    const li = e.target.closest('.task-item');
    if (!li) return;

    // Handle task completion toggle
    if(e.target.className === "task-text") {
        li.classList.toggle("checked");
        saveData();
    }
    // Handle delete
    else if(e.target.className === "task-btn delete-btn") {
        li.remove();
        saveData();
    }
    // Handle edit
    else if(e.target.className === "task-btn edit-btn") {
        const taskText = li.querySelector(".task-text");
        const currentText = taskText.textContent;
        
        // Create input field
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "edit-input";
        
        // Replace text with input
        taskText.replaceWith(input);
        input.focus();
        
        // Handle saving the edited text
        input.addEventListener("blur", finishEditing);
        input.addEventListener("keyup", function(e) {
            if(e.key === "Enter") {
                finishEditing.call(this);
            }
            if(e.key === "Escape") {
                this.value = currentText;
                finishEditing.call(this);
            }
        });
        
        
    }
}, false);

