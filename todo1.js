let input = document.querySelector('.input');
let container = document.querySelector('.container');
let addButton = document.querySelector('.addButton');

class Todo {
  constructor(work) {
    this.main(work);
  }

  main(work) {
    let disabInput = document.createElement('input');
    disabInput.value = work;
    disabInput.type = "text";
    disabInput.disabled = true;
    disabInput.classList.add('item_input');

    let divItem = document.createElement('div');
    divItem.classList.add('item');

    let editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.innerHTML = "EDIT";

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = "REMOVE";

    container.appendChild(divItem);
    divItem.appendChild(disabInput);
    divItem.appendChild(editButton);
    divItem.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(disabInput));
    removeButton.addEventListener("click", () => this.remove(divItem));
  }

  edit(e) {
    e.disabled = !e.disabled;
  }
  remove(e) {
    e.remove();
  }
}

function isThereWork() {
  if (input.value != "") {
    new Todo(input.value);
    input.value = "";
  }
}
