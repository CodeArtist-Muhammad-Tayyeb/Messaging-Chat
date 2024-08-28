function forChatVisiblity() {
    const visible = document.getElementById('chat-Box');
    visible.style.display = visible.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
function sendMessage() {
    const chatWindow = document.getElementById('chat-window');
    const inputMessage = document.getElementById('user-input').value.trim();

    if (inputMessage === '') {
        alert('Type Something!');
    };

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    messageContainer.innerText = inputMessage;
    chatWindow.appendChild(messageContainer);

    document.getElementById('user-input').value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}