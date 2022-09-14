let saldo = document.getElementById('saldo');
saldo.textContent = '$' + localStorage.getItem('balance');

function home(){
    window.location.href = 'home.html';
}