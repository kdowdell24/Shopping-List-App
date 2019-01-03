//assigns btn variable for #add-button
var btn = document.getElementById("add-button");

//adds functionality to #add-button for creating new list items
btn.addEventListener("click", createNewItem);

function createNewItem() {
    console.log("Create");
	
    //creates div element with a class of "input-item"
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("input-item");

    //creates input element and sets type attribute to "checkbox" and adds class of "check-box"
    let checkBoxInput = document.createElement("input");
    checkBoxInput.setAttribute("type", "checkbox");
    checkBoxInput.classList.add("check-box");

    //creates input element and sets "type" attribute to "text"
    let textInput = document.createElement("input");
    textInput.setAttribute("type", "text");

    //creates button element and sets "class" to "delete-button" and "type" to "button"
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("type", "button");

    //creates Font Awesome "X" icon element and assigns "fas" and "fa-times" classes to it
    let xIcon = document.createElement("i");
    xIcon.classList.add("fas");
    xIcon.classList.add("fa-times");

    //adds .input-item element to form
    let formElement = document.getElementById("shopping-list");
    formElement.appendChild(itemContainer);

    //adds checkbox, textbox, and .delete-button elements to .input-item
    itemContainer.appendChild(checkBoxInput);
    itemContainer.appendChild(textInput);
    itemContainer.appendChild(deleteButton);

    //adds "X" icon to .delete-button element
    deleteButton.appendChild(xIcon);

    //removes .input-item element from form
    deleteButton.addEventListener("click", function() {
        checkBoxInput.remove();
        textInput.remove();
        deleteButton.remove();
        itemContainer.remove();

    });
}

//adds new list item after pressing Enter key while textbox input is active
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && (document.activeElement.tagName.toLowerCase() !== "button" && document.activeElement.className.toLowerCase() !== "check-box")) {
        createNewItem();
        console.log("New item created!");
    }
});


//removes all content from list upon pressing Clear All button
document.getElementById("clear-button").addEventListener("click", function() {
    let listContent = document.querySelectorAll(".input-item");
    for (var i = 0; i < listContent.length; i++) {
        listContent[i].remove();
    }
})