document.addEventListener("DOMContentLoaded", () => {
  
  function addToList(e) {
    e.preventDefault()
    const newItemInput = document.getElementById("itemInput");

    const newItem = newItemInput.value.trim();

    //Returns an alert message when there is no input
    if (!newItem) {
      alert("Enter item to continue !");
      return;
    }

    const itemList = document.createElement("li");
    itemList.textContent = newItem;

    itemList.addEventListener("click", function () {
      this.classList.toggle("purchased");
    });

    // Append the new list item and delete button to the existing list
    const list = document.getElementById("itemList");
    list.appendChild(itemList);

    newItemInput.value = "";
  }
  // Function to add an item

  const form = document.getElementById("Shopping");
  form.addEventListener("submit", addToList);

  

  // Function to clear the entire list
  const clearButton = document.getElementById("clearListButton");
  clearButton.addEventListener("click", function () {
    const itemListNew = document.getElementById("itemList");
    itemListNew.innerHTML = ""; // Clear the list
  });
  const list = document.getElementById("itemList");
  list.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('purchased');
    } else if (event.target.tagName === 'BUTTON') {
      event.target.parentNode.remove();
    }
  });
});
