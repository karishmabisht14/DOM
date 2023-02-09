//fetching the ids pf form and ul tag  
const form = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');


//form submit event
form.addEventListener('submit', addItems);
// delete items event
itemsList.addEventListener('click', deleteItems);

//create function addItems
function addItems(e){
    e.preventDefault();
    
    //create newLI
    const li = document.createElement('li');
    
    //add classname
    li.className = 'list-group-item';

    //append li to form input value
    li.appendChild(document.createTextNode(document.querySelector('#item').value));

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
    console.log(editBtn);

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

