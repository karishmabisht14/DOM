const items = document.querySelector('#items');

//parentElement
// console.log(items.parentElement);
items.parentElement.style.backgroundColor = 'rgba(0,0,0,.125)';

//lastElementChild
items.lastElementChild.style.color = 'orange';

//lastChild
console.log(items.lastChild);
//gives error
// items.lastChild.style.fontWeight = 'bold';

//firstChild
console.log(items.firstChild);

//firstElementChild
items.firstElementChild.style.fontWeight = 'bold';

//nextSibling
const h2 = document.querySelector('#add');
console.log(h2.nextSibling);

//nextElementSibling
h2.nextElementSibling.firstElementChild.value = 'Karishma Bisht';

//previousSibling
console.log(items.previousSibling);

//previousElementSibling
items.previousElementSibling.textContent = 'Lists';

//add HEllo word before Item Lister
//createElement 
const newDiv = document.createElement('div');

//add class
newDiv.className = 'Hello';

//add id
newDiv.id = 'hello';

//set attribute
newDiv.setAttribute('title', 'New Div');

//create textNode
const newDivText = document.createTextNode('HEllo');

//add  a textNode to newDiv
newDiv.appendChild(newDivText);

//append newDiv to itemLister container
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

h1.previousElementSibling.style.fontSize = '31px';
container.firstElementChild.style.fontWeight = 'bold';

//add HEllo word before Item 1
const li = document.createElement('li');

//add classname
li.className = 'list-group-item';

//add textNode
const liText = document.createTextNode('HEllo');

li.appendChild(liText);

const ul = document.querySelector('#items');
const firstLi = ul.firstElementChild;

ul.insertBefore(li, firstLi);

console.log(li);



