addItemForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var newItem = document.createElement("li");
    newItem.textContent = itemTextInput.value;
    todoList.appendChild(newItem);
    itemTextInput.value = "";
  });
  
  todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("complete");
    }
  });
  