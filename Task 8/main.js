//fetching the ids pf form and ul tag  
const form = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');
const filter = document.querySelector('#filter');

//form submit event
form.addEventListener('submit', addItems);
// delete items event
itemsList.addEventListener('click', deleteItems);
// filter event
filter.addEventListener('keyup', filterItems);

//create function addItems
function addItems(e){
    e.preventDefault();
    
    //create newLI
    const li = document.createElement('li');
    
    //add classname
    li.className = 'list-group-item';

    //append li to form item input value
    li.appendChild(document.createTextNode(document.querySelector('#item').value));
    //append li to form description input value
    li.appendChild(document.createTextNode(document.querySelector('#description').value));

    //create edit button
    const editBtn = document.createElement('button');

    //add classname
    editBtn.className = 'btn btn-primary btn-sm float-right edit';

    //create span for the edit button
    const span = document.createElement('span')

    //add classname
    span.className = 'bi bi-pencil';

    //append this span to editBtn
    editBtn.appendChild(span);

    //append this editBtn to li
    li.appendChild(editBtn);

    //create a delete button
    const deleteBtn = document.createElement('button');

    //add classname
    deleteBtn.className = 'btn btn-danger btn-sm float-right mx-1 delete';

    //create text node and append it
    deleteBtn.appendChild(document.createTextNode('X'));

    //append it to the itemsList
    li.appendChild(deleteBtn);

    //append itemsList to new li
    itemsList.appendChild(li);

    //remove the value from the form input
    document.querySelector('#item').value = '';
    document.querySelector('#description').value = '';

}

//create function deleteItems
function deleteItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            li.remove();
        }
    }
}

//create function filterItems
function filterItems(e){

    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    
    
    //get the li elements
    let items = document.querySelectorAll('li');

    //convert it into array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let itemDesc = item.childNodes[1].textContent;
        console.log(itemDesc);
        if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}
