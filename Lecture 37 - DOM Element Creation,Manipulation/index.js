const todoItemsSection = document.querySelector("#todo-items");
const addBtn = document.querySelector(".addBtn");
const inputText = document.querySelector("input");

addBtn.addEventListener("click", () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = `
    <div>
    <p id="pTag">${inputText.value}</p>
            <div class="todoButtons" ">
                <button id="editBtn">Edit</button>
                <button id="deleteBtn">Delete</button>
            </div>`;

  const editBtn = divElement.querySelector("#editBtn");

  const deleteBtn = divElement.querySelector("#deleteBtn");
  deleteBtn.onclick = () => divElement.remove();

  editBtn.onclick = () => {
    const p = divElement.querySelector("#pTag");

    //hw add acheck to stop user for creating todo with empty DONE
    //todo value
    if (editBtn.textContent == "save") {
      const ip = divElement.querySelector("#ip");
      if(!ip.value){
        p.textContent=p.textContent;
      }else{
      p.textContent = ip.value;
      }
      ip.remove();
      p.style.display = "inline";
    //   p is block Element
    // bydefault margin from all sides is given by browser

      editBtn.textContent = "edit";
    } else {
      const ipElem = document.createElement("input");
      ipElem.id = "ip";

      editBtn.textContent = "save";
      p.style.display = "none";
      ipElem.value = p.textContent;
      const todoButtons = divElement.querySelector(".todoButtons");
      divElement.prepend(ipElem);
    }
  };
  todoItemsSection.appendChild(divElement);
  inputText.value = "";
});
