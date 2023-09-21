const saveBtn = document.querySelector('.Save');
const removeBtn = document.querySelector('.delete');

removeBtn.addEventListener('click', (e) => {
    if(e.target.className === 'delete'){
        const div = e.target.parentElement;
        li.parentNode.removeChild(div);
    }
});

saveBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    
// create element
const saveButton = document.createElement('div');
const removeButton = document.createElement('div');

// add text content
saveButton.textContent = 'add';
removeButton.textContent = 'delete'

saveButton.classList.add('Save');
removeButton.classList.add('delete');

div.appendChild(saveButton);
div.appendChild(removeButton);
});
