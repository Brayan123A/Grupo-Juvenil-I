
document.getElementById('btn-mas-info').addEventListener('click', () => {
    alert('¡Bienvenido al Grupo Juvenil I! Próximamente podrás conocer más sobre nuestras actividades y proyectos.');
});

document.addEventListener('DOMContentLoaded', function() {
    // Encuentra el botón por su ID
    const saberMasButton = document.getElementById('saberMasBtn');

    // Verifica que el botón existe antes de añadir el evento
    if (saberMasButton) {
        // Agrega un evento de escucha para el clic
        saberMasButton.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del enlace (evita que salte a la parte superior)
            event.preventDefault(); 
            // Muestra la alerta
            alert("¡Bienvenido al Grupo Juvenil I! Aquí podrás conocer más sobre nuestras actividades.");
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el botón "Saber más"
    const saberMasButton = document.getElementById('saberMasBtn');
    if (saberMasButton) {
        saberMasButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert("Bienvenidos a la página grupo juvenil I");
        });
    }

  
    // Funcionalidad para el desplazamiento suave de los enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#inicio"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});




    const logoButton = document.getElementById('logoBtn');
    if (logoButton) {
        logoButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert("¡Has hecho clic en el logotipo!");
        });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

// Seleccionar todos los items de la galería
const galeriaItems = document.querySelectorAll('.galeria-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-modal');
const captionText = document.getElementById('caption');
const cerrar = document.getElementsByClassName('cerrar')[0];

// Abrir modal al hacer clic en imagen
galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = item.src;
        captionText.innerHTML = item.alt;
    });
});

// Cerrar modal al hacer clic en la X
cerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
modal.onclick = function(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}






