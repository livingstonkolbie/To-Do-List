
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
    
    let newItem = document.createElement("p");
    let node = document.createTextNode(item);
    newItem.appendChild(node);
    newItem.classList.add("d-inline");
    newItem.id = "theToDo";

    let newBreak = document.createElement("br");

    let element = document.getElementById("listOfItems");
    element.appendChild(inputBox);
    element.appendChild(newItem);
    element.appendChild(newBreak);

    function clearFields() {
        document.getElementById("userInput").value = "";
    };

    clearFields();


    // this part is trippin me up... why can't i remove the to-do item
    function clearListItem() {
        let eraserClick = document.getElementById("theToDo");
        eraserClick.addEventListener("click", () => {
            eraserClick.remove();
        });

        clearListItem();
    }
    
    
    
});


