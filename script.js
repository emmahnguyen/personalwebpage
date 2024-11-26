const chatbox = document.getElementById('chatbox');
const toggleChatBtn = document.getElementById('toggleChatBtn');

function toggleChat() {
    if (chatbox.style.display === 'none') {
        chatbox.style.display = 'block';
        toggleChatBtn.style.display = 'none';
    } else {
        chatbox.style.display = 'none';
        toggleChatBtn.style.display = 'block';
    }
}

function sendMessage() {
    const chatboxBody = document.getElementById('chatboxBody');
    const chatInput = document.getElementById('chatInput');
    const userMessage = chatInput.value.trim();

    if (!userMessage) return;

    // Display user message
    appendMessage(userMessage, 'user');

    // Generate bot response
    const botMessage = getBotResponse(userMessage);
    setTimeout(() => appendMessage(botMessage, 'bot'), 500);

    chatInput.value = ''; // Clear input
}

function appendMessage(message, sender) {
    const chatboxBody = document.getElementById('chatboxBody');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
        return 'Hi there! How can I assist you?';
    } else if (lowerCaseMessage.includes('projects')) {
        return 'I am working on a Shopping App and a skincare app!';
    } else if (lowerCaseMessage.includes('contact')) {
        return 'You can contact me via LinkedIn or through the contact form.';
    } else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'I am here to help! Feel free to ask me anything about my work.';
    }
}

// Initialize chatbox state
chatbox.style.display = 'none';
toggleChatBtn.style.display = 'block';
