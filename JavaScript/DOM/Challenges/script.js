//Example - 1 

const myParagraph = document.getElementById('myParagraph');
const changeTextButton = document.getElementById('changeTextButton');

changeTextButton.addEventListener('click',function () {
    myParagraph.textContent = 'The Paragraph is changed';
})