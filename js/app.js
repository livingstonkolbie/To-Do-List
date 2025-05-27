

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

let toDoItem = document.getElementById("userInput");
let addTaskButton = document.getElementById("addTask");



addTaskButton.addEventListener("click", () => {
    let item = document.getElementById("userInput").value;
    console.log(item);

    let inputBox = document.createElement("input");
    inputBox.type = "checkbox";
    inputBox.checked = false;
    let checkBox = document.createTextNode(inputBox);
    inputBox.appendChild(checkBox);
    inputBox.classList.add("checkboxStyle");
    
    let newItem = document.createElement("p");
    let node = document.createTextNode(item);
    newItem.appendChild(node);
    newItem.classList.add("d-inline");
    newItem.classList.add("paraStyle");
    newItem.id = "theToDo";

    let newBreak = document.createElement("br");

    inputBox.addEventListener("change", () => {
        if (inputBox.checked) {
            inputBox.remove();
            newItem.remove();
            newBreak.remove();
        }
    });

    let element = document.getElementById("listOfItems");
    element.appendChild(inputBox);
    element.appendChild(newItem);
    element.appendChild(newBreak);

    function clearFields() {
        document.getElementById("userInput").value = "";
    };

    clearFields();
    
});


