const myTodo = document.getElementById('todo');
const saveButton = document.querySelector('.Save');
const removeButton = document.querySelector('.remove');

// console.log(myTodo);
// console.log(saveButton);
// console.log(removeButton);

saveButton.addEventListener('click', () => {
    saveButton.classList.add('Save');
});
removeButton.addEventListener('click', () => {
    removeButton.classList.remove("remove");
});

function saveBtn() {

}