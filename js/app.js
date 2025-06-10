
// BELOW is tooltips from Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


let toDoItem = document.getElementById("userInput");
let addTaskButton = document.getElementById("addTask");


// addTaskButton.addEventListener("click", () => {
//     let item = document.getElementById("userInput").value;
//     console.log(item);

//     let inputBox = document.createElement("input");
//     inputBox.type = "checkbox";
//     inputBox.checked = false;
//     let checkBox = document.createTextNode(inputBox);
//     inputBox.appendChild(checkBox);
//     inputBox.classList.add("checkboxStyle");
    
//     let newItem = document.createElement("p");
//     let node = document.createTextNode(item);
//     newItem.appendChild(node);
//     newItem.classList.add("d-inline");
//     newItem.classList.add("paraStyle");
//     newItem.id = "theToDo";

//     let newBreak = document.createElement("br");

//     inputBox.addEventListener("change", () => {
//         if (inputBox.checked) {
//             inputBox.remove();
//             newItem.remove();
//             newBreak.remove();
//         }
//     });

//     let element = document.getElementById("listOfItems");
//     element.appendChild(inputBox);
//     element.appendChild(newItem);
//     element.appendChild(newBreak);

//     function clearFields() {
//         document.getElementById("userInput").value = "";
//     };

//     clearFields();
    
// });


// Handle dropdown item clicks
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let category = e.target.getAttribute('data-category');
        let taskText = document.getElementById("userInput").value;
        
        if (taskText.trim() === "") return; // Don't add empty tasks
        
        addTaskToCategory(category, taskText);
        document.getElementById("userInput").value = ""; // Clear input
    });
});

function addTaskToCategory(category, taskText) {
    // Create or find category section
    let categorySection = document.getElementById(`category-${category}`);
    
    if (!categorySection) {
        // Create new category section
        categorySection = document.createElement('div');
        categorySection.id = `category-${category}`;
        categorySection.innerHTML = `<h5 class="mt-4 mb-2">${category.toUpperCase()}</h5>`;
        document.getElementById("listOfItems").appendChild(categorySection);
    }
    
    // Create task elements (same as your original code)
    let inputBox = document.createElement("input");
    inputBox.type = "checkbox";
    inputBox.classList.add("checkboxStyle");
    
    let newItem = document.createElement("p");
    newItem.appendChild(document.createTextNode(taskText));
    newItem.classList.add("d-inline", "paraStyle");
    
    let newBreak = document.createElement("br");
    
    // Remove task when checked
    inputBox.addEventListener("change", () => {
        if (inputBox.checked) {
            inputBox.remove();
            newItem.remove();
            newBreak.remove();

            // Check if category section is now empty
            checkIfCategoryEmpty(categorySection);
        }
    });
    
    // Add to category section
    categorySection.appendChild(inputBox);
    categorySection.appendChild(newItem);
    categorySection.appendChild(newBreak);
}

function checkIfCategoryEmpty(categorySection) {
    // Count remaining tasks (checkboxes) in this category
    let remainingTasks = categorySection.querySelectorAll('input[type="checkbox"]').length;
    
    // If no tasks left, remove the entire category section
    if (remainingTasks === 0) {
        categorySection.remove();
    }
}