const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input i");

let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const createMessage = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    chatLi.innerHTML = className === "outgoing" ? `<p></p>` : `<div class="message-icon"></div><p></p>`;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector("p");

    setTimeout(() => {
        if(userMessage.toLowerCase().includes('about') || userMessage.toLowerCase().includes('who')){
            messageElement.innerHTML = 'I’m a full-stack developer from Sri Lanka.'+
                'Experienced full stack developer with a passion for building robust and user-friendly applications.';
        }else if(userMessage.toLowerCase().includes('contact')){
            messageElement.innerHTML = 'You can contact me from'+
                '<a href="https://mail.google.com/mail/?view=cm&source=mailto&to=viniduminsara@gmail.com">'+
                '<div class="select_option"><i class="fa-solid fa-envelope"></i>Email</div>'+
                '</a>'+
                '<a href="https://wa.me/94769007620">'+
                '<div class="select_option"><i class="fa-brands fa-whatsapp"></i>Whatsapp</div>'+
                '</a>'+
                '<a href="https://www.linkedin.com/in/vinidu-minsara-9157b7278/">'+
                '<div class="select_option"><i class="fa-brands fa-linkedin"></i>Linkedin</div>'+
                '</a>';
        }else if(userMessage.toLowerCase().includes('work') || userMessage.toLowerCase().includes('project')){
            messageElement.innerHTML = 'You can see my projects here'+
                '<a href="">'+
                '<div class="select_option">Project Page<i class="fa-solid fa-up-right-from-square"></i></div>'+
                '</a>';
        }else{
            messageElement.innerHTML = 'Hi, How can I help you ?'+
                '<div class="select_option first-select">About Vinidu Minsara</div>'+
                '<div class="select_option first-select">Works of Vinidu</div>'+
                '<div class="select_option first-select">Contact Vinidu</div>';
            const first_selection = document.querySelectorAll(".first-select");
            first_selection[0].addEventListener('click',() => firstSelectionAction(first_selection[0]));
            first_selection[1].addEventListener('click',() => firstSelectionAction(first_selection[1]));
            first_selection[2].addEventListener('click',() => firstSelectionAction(first_selection[2]));
        }
    }, 1500);

}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createMessage(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight+100);

    setTimeout(() => {
        const incomingMessage = createMessage("...", "incoming");
        chatbox.appendChild(incomingMessage);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingMessage);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

//message select options action
function firstSelectionAction(selection){
    if(selection.textContent.startsWith('About')){
        userMessage = 'about';
    }else if(selection.textContent.startsWith('Works')){
        userMessage = 'work';
    }else{
        userMessage = 'contact';
    }

    const incomingMessage = createMessage("...", "incoming");
    chatbox.appendChild(incomingMessage);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingMessage);
}