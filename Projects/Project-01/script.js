const Btn = document.getElementById('changeBtn');

Btn.addEventListener('click', function() {
    const smallDiv = document.getElementById('leftDiv');

    if(smallDiv.classList.contains('rightSmall')) {
        smallDiv.classList.remove('rightSmall')
        smallDiv.classList.add('leftSmall');
    } else {
        smallDiv.classList.remove('leftSmall')
        smallDiv.classList.add('rightSmall');
    }
})