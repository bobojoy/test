document.addEventListener("DOMContentLoaded", () => {
  
 //Function addToLIst
  function addToList(e) {
    e.preventDefault()
    const newItemInput = document.getElementById("itemInput");

    const newItem = newItemInput.value.trim();

    
    if (!newItem) {
      alert();
      return;
    }

    const itemList = document.createElement("li");
    itemList.textContent = newItem;

    itemList.addEventListener("click", function () {
      this.classList.toggle("purchased");
    });

    
    const list = document.getElementById("itemList");
    list.appendChild(itemList);

    newItemInput.value = "";
    
  }
  
//Form Submission Listener
  const form = document.getElementById("Shopping");
  form.addEventListener("submit", addToList);

//Clear List Button
  const clearButton = document.getElementById("clearListButton");
  clearButton.addEventListener("click", function () {
    const itemListNew = document.getElementById("itemList");
    itemList.innerHTML = ""; 
  });
  
 
});
