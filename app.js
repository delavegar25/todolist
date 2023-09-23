// legacy code
const saveBtn = document.querySelector('.Save');
const removeBtn = document.querySelector('.delete');

removeBtn.addEventListener('click', (e) => {
      e.target.classList.add('delete');
      if(e.target.className === 'wrapper'){
        wrapper.parentNode.removeChild(removeBtn);
      }
})

saveBtn.addEventListener('submit', (e) => {
    e.preventDefault();
})

function searchField() {
    let input = document.getElementById('#todo');
    input = input.toLowerCase();
    let x = document.getElementByIdByClassName('wrapper');

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}