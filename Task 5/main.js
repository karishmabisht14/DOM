const singleItem = document.getElementsByClassName('singleList');
singleItem[0].style.color = 'green';

const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[4]);

for(let i = 0; i < li.length; i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}
li[4].style.border = '1px solid rgba(0,0,0,.125)';
li[4].style.listStyleType = 'none';