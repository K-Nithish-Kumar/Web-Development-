document.getElementById("teaList").addEventListener('click', function (event) {
    if(event.target && event.target.matches(".teaItem")) {
        alert("You selected :" + event.target.textContent)
    }
})