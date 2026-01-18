document.getElementById("example-08").addEventListener('submit', function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Your Feedback is ${feedback}`;
})