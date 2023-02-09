//using Query Selector
// const li = document.querySelector('li');
// console.log(li);

// const secondLi = document.querySelector('li:nth-child(2)');
// secondLi.style.backgroundColor = 'green';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//using Query Selector All

const lists = document.querySelectorAll('li');
for(let i = 0; i < lists.length; i++)
{
    if(i == 1)
    {
        lists[i].style.color = 'green';
        break;
    }
}

const items = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i = 0; i < items.length; i++)
{
    items[i].style.backgroundColor = 'green';
}