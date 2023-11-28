var textInput = document.getElementById('textInput');
var textForm = document.getElementById('textForm');
var messageList = document.getElementById('messageList');

textForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    sendText();
});

function sendText() {
    // Prevent the default form submission behavior
    fetch('http://localhost:8000/api/send-text', {
        method: 'POST',
        body: new URLSearchParams({
            text: textInput.value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error sending text:', error);
    });
    fetchMessages()
}

// get messages and call displayMessages()
function fetchMessages() {
    fetch('http://localhost:8000/api/get-messages')
    .then(response => response.json())
    .then(data => {
        console.log(data.messageList)
        displayMessages(data.messageList);
    })
    .catch(error => {
        console.error('Error fetching messages:', error);
    });
}

function displayMessages(messages) {
    console.log(messages)
    messageList.innerHTML = '';
    messages.forEach(message => {
        var listItem = document.createElement('li');
        listItem.textContent = message;
        messageList.appendChild(listItem);
    });
}
fetchMessages()