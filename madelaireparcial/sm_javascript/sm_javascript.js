function actualizarPuntuacion() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "actualizar_puntuacion.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("puntuacion").innerHTML = "Tu puntuación: " + xhr.responseText;
        }
    };

    xhr.send();
}


const opciones = ["piedra", "papel", "tijera"];

function obtenerOpcionComputadora() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

function determinarGanador(opcionJugador, opcionComputadora) {
    if (opcionJugador === opcionComputadora) {
        return "Empate";
    } else if (
        (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "La computadora gana";
    }
}

          

function jugar(opcionJugador) {
    const opcionComputadora = obtenerOpcionComputadora();
    const resultado = determinarGanador(opcionJugador, opcionComputadora);
    document.getElementById("resultado").innerHTML = `Elegiste ${opcionJugador}, la computadora eligió ${opcionComputadora}. ${resultado}`;

    actualizarPuntuacion();
         }


document.getElementById("piedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("papel").addEventListener("click", () => jugar("papel"));
document.getElementById("tijera").addEventListener("click", () => jugar("tijera"));

