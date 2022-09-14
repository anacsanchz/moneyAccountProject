let welcome = document.getElementById('welcome')
welcome.textContent = 'Bienvenido ' + localStorage.getItem('nombre');

function consultarPage() {
    window.location.href = 'balance.html';
}

function retirarPage() {
    window.location.href = 'cash.html'
}

function depositarPage() {
    window.location.href = 'deposit.html'
}

function logout() {
    window.location.href = 'index.html';
}