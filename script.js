// LÓGICA PARA EL INICIO DE SESIÓN (index.html)
const btnLogin = document.getElementById('btn-login');
const btnRegistro = document.getElementById('btn-registro');
const campoNombre = document.getElementById('campo-nombre');
const btnEnviar = document.getElementById('btn-enviar');
const enlaceOlvido = document.getElementById('enlace-olvido');
const formulario = document.getElementById('mi-formulario');

if (btnRegistro) {
    btnRegistro.addEventListener('click', () => {
        btnRegistro.classList.add('activo');
        btnLogin.classList.remove('activo');
        campoNombre.style.display = 'block';
        campoNombre.required = true;
        btnEnviar.textContent = 'Registrarse';
        enlaceOlvido.style.display = 'none';
    });
}

if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('activo');
        btnRegistro.classList.remove('activo');
        campoNombre.style.display = 'none';
        campoNombre.required = false;
        btnEnviar.textContent = 'Entrar';
        enlaceOlvido.style.display = 'block';
    });
}

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("¡Acción realizada con éxito! Redirigiendo al servidor...");
        window.location.href = "inicio.html"; 
    });
}

// LÓGICA PARA LA PÁGINA DE MODS (inicio.html)
const formMod = document.getElementById('form-mod');
const listaMods = document.getElementById('lista-mods');

if (formMod && listaMods) {
    formMod.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('mod-nombre').value;
        const version = document.getElementById('mod-version').value;
        const descripcion = document.getElementById('mod-desc').value;

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-mod');
        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <span class="version-tag">MC ${version}</span>
            <p>${descripcion}</p>
            <div style="margin-top: 15px; text-align: right;">
                <button type="button" class="btn-like" style="background-color: #e0e0e0; border: none; padding: 6px 12px; border-radius: 6px; font-weight: bold; cursor: pointer; color: #333; transition: all 0.2s;">
                    ❤️ Me gusta (<span>0</span>)
                </button>
            </div>
        `;

        const botonLike = tarjeta.querySelector('.btn-like');
        const contador = botonLike.querySelector('span');
        let likes = 0;
        let leDioLike = false;

        botonLike.addEventListener('click', () => {
            if (!leDioLike) {
                likes++;
                contador.textContent = likes;
                botonLike.style.backgroundColor = '#ffcdd2'; 
                botonLike.style.color = '#b71c1c';
                leDioLike = true;
            } else {
                likes--;
                contador.textContent = likes;
                botonLike.style.backgroundColor = '#e0e0e0'; 
                botonLike.style.color = '#333333';
                leDioLike = false;
            }
        });

        listaMods.insertBefore(tarjeta, listaMods.firstChild);
        formMod.reset();
    });
}
