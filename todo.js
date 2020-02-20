var item = document.querySelector('.item');
var itemInput = document.querySelector('.input');
var container = document.querySelector('.container');
var addButton = document.querySelector('.addButton');

class Item{
  constructor(text) {
    this.main(text)
  }

  main(text) {
    var input = document.createElement('input');
    input.value = text;
    input.classList.add('item_input');
    input.disabled = true;
    input.type = "text";

    let itemClassDiv = document.createElement('div');
    itemClassDiv.classList.add("item");

    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT"
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "REMOVE"
    removeButton.classList.add('removeButton');

    container.appendChild(itemClassDiv);
    
    itemClassDiv.appendChild(input);
    itemClassDiv.appendChild(editButton);
    itemClassDiv.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));

    removeButton.addEventListener("click", () => this.remove(itemClassDiv));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(input) {
    container.removeChild(input);
  }
}

function check() {
  if (itemInput.value != "") {
    new Item(itemInput.value);
    itemInput.value = "";
  }
};

addButton.addEventListener("click", check)