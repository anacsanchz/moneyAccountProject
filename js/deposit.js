function home() {
    window.location.href = 'home.html';
}

function depositar() {
    let depositAmount = document.getElementById('depositAmount').value;
    let span = document.getElementById('error');


    if (depositAmount > 2000) {
        span.textContent = 'No puedes depositar mas de $2000'
        setTimeout(() => {
            span.textContent = '';
        }, 2000);
    } else {
        let nuevoSaldo = parseInt(depositAmount) + parseInt(localStorage.getItem('balance'));
        console.log(nuevoSaldo)
        span.textContent = 'Deposito exitoso'
        setTimeout(() => {
            span.textContent = '';
        }, 2000);
        localStorage.setItem('balance', nuevoSaldo)
    }
}