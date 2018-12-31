document.getElementById("add-button").addEventListener("click",function () {
	
	function createNewItem() {
		//creates div element with a class of "input-item"
	let itemContainer = document.createElement("div");
	itemContainer.classList.add("input-item");
	
	//creates input element and sets type attribute to "checkbox"
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
	
	//creates Font Awesome "X" icon and adds "fas" and "fa-times" classes
	let xIcon = document.createElement("i");
	xIcon.classList.add("fas");
	xIcon.classList.add("fa-times");
	
	//adds a div form
	let formElement = document.getElementById("shopping-list");
	formElement.appendChild(itemContainer);
	
	//adds input and "delete-button" to div
	itemContainer.appendChild(checkBoxInput);
	itemContainer.appendChild(textInput);
	itemContainer.appendChild(deleteButton);
	
	//adds "X" icon to button
	deleteButton.appendChild(xIcon);
	
	//removes an input and deleteButton from form
	deleteButton.addEventListener("click", function () {
		checkBoxInput.remove();
		textInput.remove();
		deleteButton.remove();
		itemContainer.remove();
		
	});
	};
	
	createNewItem();
	
	//Adds new item after pressing Enter key
	let itemList = document.querySelectorAll("input[type=text]");
	for (var i = 0; i < itemList.length; i++) {
		addEventListener("keypress", function (e) {
			if (e.key === "Enter") {
				createNewItem();
				console.log ("New item created!");
			}
		})
	}
	
}); 