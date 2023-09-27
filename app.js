// legacy code
const saveBtn = document.querySelector('.Save');
//create element
let removeBtn = document.createElement('button');
removeBtn.textContent = 'delete';
removeBtn.classList.add('delete')


removeBtn.addEventListener('click', (e) => {
    let elementToRemove = document.querySelector('#delete');
    elementToRemove.remove();
})

let containerElement = document.querySelector('.wrapper');
containerElement.appendChild(removeBtn);    


saveBtn.addEventListener('submit', (e) => {
    e.preventDefault();
})

function searchField() {
    let input = document.getElementById('#todo').value;
    input = input.toLowerCase();
    let x = document.getElementByIdByClassName('wrapper');

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display === "none";
        }
        else {
            x[i].style.display === "list-item";
        }
    }
}
