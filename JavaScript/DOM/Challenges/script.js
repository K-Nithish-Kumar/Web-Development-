//Example - 1 

const myParagraph = document.getElementById('myParagraph');
const changeTextButton = document.getElementById('changeTextButton');

changeTextButton.addEventListener('click',function () {
    myParagraph.textContent = 'The Paragraph is changed';
});

// Example - 2

const citiesList = document.getElementById('citiesList');
const highlightBtn = document.getElementById('highlightFirstCity');

highlightBtn.addEventListener('click',function () {
    citiesList.firstElementChild.classList.add('hightlight');
});

// Example - 3
const coffeeType = document.getElementById('coffeeType');
const changeOrder =  document.getElementById('changeOrder');

changeOrder.addEventListener('click', function () {
    coffeeType.textContent = 'Espresso';
});

// Example - 4 
const addNewItem = document.getElementById('addNewItem');
const shoppingList = document.getElementById('shoppingList');

addNewItem.addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = 'Egg'

    shoppingList.lastElementChild.appendChild(newItem);
});

// Example - 5

const taskList = document.getElementById('taskList');
const removeLastTask = document.getElementById('removeLastTask');

removeLastTask.addEventListener('click', function () {
    taskList.lastElementChild.remove();
})