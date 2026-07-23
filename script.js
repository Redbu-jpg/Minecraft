const btnLogin = document.getElementById('btn-login');
const btnRegistro = document.getElementById('btn-registro');
const campoNombre = document.getElementById('campo-nombre');
const btnEnviar = document.getElementById('btn-enviar');
const enlaceOlvido = document.getElementById('enlace-olvido');
const formulario = document.getElementById('mi-formulario');

// Pestaña Registrarse
btnRegistro.addEventListener('click', () => {
    btnRegistro.classList.add('activo');
    btnLogin.classList.remove('activo');
    campoNombre.style.display = 'block';
    campoNombre.required = true;
    btnEnviar.textContent = 'Registrarse';
    enlaceOlvido.style.display = 'none'; // Ocultamos el enlace en registro
});

// Pestaña Iniciar Sesión
btnLogin.addEventListener('click', () => {
    btnLogin.classList.add('activo');
    btnRegistro.classList.remove('activo');
    campoNombre.style.display = 'none';
    campoNombre.required = false;
    btnEnviar.textContent = 'Entrar';
    enlaceOlvido.style.display = 'block'; // Mostramos el enlace en login
});

// Acción al enviar el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue bruscamente
    
    // Alerta interactiva tipo Minecraft
    alert("¡Acción realizada con éxito! Redirigiendo al servidor...");
    
    
    // Modifica la última sección de tu script.js para que quede exactamente así:
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    alert("¡Acción realizada con éxito! Redirigiendo al servidor...");
    
    // Ahora redirige a tu nueva página local
    window.location.href = "inicio.html"; 
});
});
// ... MANTÉN AQUÍ TODO TU CÓDIGO ANTERIOR DE SCRIPT.JS ...

// LÓGICA NUEVA PARA LA PÁGINA DE MODS (Detecta si estamos en inicio.html)
const formMod = document.getElementById('form-mod');
const listaMods = document.getElementById('lista-mods');

if (formMod && listaMods) {
    formMod.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capturar los datos del formulario
        const nombre = document.getElementById('mod-nombre').value;
        const version = document.getElementById('mod-version').value;
        const descripcion = document.getElementById('mod-desc').value;

        // Crear la estructura de la tarjeta visual
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-mod');
        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <span class="version-tag">MC ${version}</span>
            <p>${descripcion}</p>
        `;

        // Añadir la tarjeta a la lista (al principio)
        listaMods.insertBefore(tarjeta, listaMods.firstChild);

        // Limpiar el formulario
        formMod.reset();
    });
}
