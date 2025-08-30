// Selecciona los elementos
const hamburger = document.querySelector('#hamburguer');
const navLinks = document.querySelector('.nav-links');

// Agrega evento de clic al botón hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});




document.getElementById('btn-mas').addEventListener('click', () => {
    alert('¡Bienvenido al Grupo Juvenil I! Aquí podrás conocer más sobre nuestras actividades.');
});
// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('header nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // previene el salto instantáneo
        const targetId = this.getAttribute('href').substring(1); // obtiene el id
        const targetSection = document.getElementById(targetId);

        // Scroll suave hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
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

