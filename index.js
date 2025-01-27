let isLoggedIn = false;

const authButton = document.getElementById('auth-button');
const registerButton = document.getElementById('register-button');

function updateButtons() {
    if (isLoggedIn) {
        authButton.textContent = 'Logg ut';
        registerButton.style.display = 'none';
    } else {
        authButton.textContent = 'Logg inn';
        registerButton.style.display = 'inline-block';
    }
}

authButton.addEventListener('click', () => {
    if (isLoggedIn) {
        alert('Du er nå logget ut.');
        isLoggedIn = false;
        updateButtons();
    } else {
        window.location.href = 'pålogging.html';
    }
});

registerButton.addEventListener('click', () => {
    window.location.href = 'registrer.html';
});

updateButtons();
