const usuarios = [
    {
        nombre: "a",
        rango: "Dueño"
    },
    {
        nombre: "Jugador1",
        rango: "VIP"
    },
    {
        nombre: "Jugador2",
        rango: "Moderador"
    }
];

function cambiarNombre() {
    let nuevoNombre = prompt("Escribe tu nuevo nombre:");

    if (nuevoNombre) {
        document.getElementById("nombre-usuario").innerHTML = nuevoNombre;
    }
}