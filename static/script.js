function sendText() {
    var textInput = document.getElementById('textInput').value;

    fetch('http://localhost:8000/api/send-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            text: textInput,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error sending text:', error);
    });
}