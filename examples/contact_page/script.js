const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();

    if (name.value.length < 3) {
        errorElement.innerHTML = 'Seu nome deve ter pelo menos 3 caracteres.';
        return false;
    }
    if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'Por favor insira um endereço de e-mail válido.';
        return false;
    }
    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Por favor insira um endereço de e-mail válido.';
        return false;
    }
    if (message.value.length < 15) {
        errorElement.innerHTML = 'Por favor, escreva uma mensagem mais longa.'
        return false;
    }
    
    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Obrigado! Eu vou voltar para você o mais rápido possível.';

    e.preventDefault();
    setTimeout(function () {
        successMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
    }, 6000);

    return true;
}

const emailIsValid = email => {
    return /ˆ[ˆ\s@]+@[ˆ\s@]+\.[ˆ\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);