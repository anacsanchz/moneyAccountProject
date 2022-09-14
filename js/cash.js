function home() {
    window.location.href = 'home.html';
}

function retirar() {
    let cashAmount = document.getElementById('cashAmount').value;
    let span = document.getElementById('error');
    let newBalance = localStorage.getItem('balance') - cashAmount;

    // console.log('Nuevo saldo: ', newBalance)

    if (newBalance < 10) {
        span.textContent = 'El monto minimo disponible debe ser 10$. Intenta nuevamente';
        setTimeout(() => {
            span.textContent = '';
        }, 2000);

    } else {
        span.textContent = 'Retiro exitoso';
        setTimeout(() => {
            span.textContent = '';
        }, 2000);
        localStorage.setItem('balance', newBalance)
    }
}


// function displayError(isError) {
//     if (isError) {

//     } else {

//     }
// }