const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');


const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
};


const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
};


form.addEventListener('input', (event) => {
    if (event.target === emailInput || event.target === messageInput) {
        saveStateToLocalStorage();
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    emailInput.value = '';
    messageInput.value = '';
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
});

loadStateFromLocalStorage();