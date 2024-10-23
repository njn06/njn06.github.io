document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let userMessage = document.getElementById("user-input").value;
        if (userMessage.trim() !== "") {
            displayMessage(userMessage, "user");
            generateResponse(userMessage);
            document.getElementById("user-input").value = ""; // Clear input field
        }
    }
});

function displayMessage(message, sender) {
    let messageContainer = document.createElement("div");
    messageContainer.classList.add("message");
    if (sender === "user") {
        messageContainer.classList.add("user-message");
    } else {
        messageContainer.classList.add("bot-message");
    }
    messageContainer.innerText = message;
    document.getElementById("messages").appendChild(messageContainer);
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

function generateResponse(userMessage) {
    let botResponse;
    
    // Basic responses (customize as you want)
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("education")) {
        botResponse = "I am currently studying Computer Science at MIT, Anna University!";
    } else if (userMessage.toLowerCase().includes("skills")) {
        botResponse = "I have skills in Python, C++, MySQL, and Java.";
    } else if (userMessage.toLowerCase().includes("projects")) {
        botResponse = "I've worked on a Tic Tac Toe program and a simple game.";
    } else {
        botResponse = "Sorry, I am still learning! Try asking about my skills, education, or projects.";
    }

    // Display bot response
    displayMessage(botResponse, "bot");
}
