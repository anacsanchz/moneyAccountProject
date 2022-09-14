let ana = ['Ana', 'Sanchez', 'anacsanchez', '123123', 3000]
let juan = ['Juan', 'Perez', 'juansimon', '12312344', 6000]
let lucas = ['Lucas', 'Perez', 'lucasno', '12312345', 9000]

let clientes = [ana, juan, lucas];

var userLogeado;

function login() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    userLogeado = clientes.find((persona) => user == persona[2])
    // console.log(userLogeado)
    if (userLogeado && pass === userLogeado[3]) {
        displayError(false)
    } else {
        displayError(true)
    }
}

function displayError(isError) {
    if (isError) {
        let span = document.getElementById('error')
        span.textContent = 'Usuario o contraseña invalido. Intenta nuevamente'
    } else {
        localStorage.clear() //limpiar 
        localStorage.setItem('nombre', userLogeado[0])
        localStorage.setItem('apellido', userLogeado[1])
        localStorage.setItem('balance', userLogeado[4])
        window.location.href = 'home.html';
    }
}