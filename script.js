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
