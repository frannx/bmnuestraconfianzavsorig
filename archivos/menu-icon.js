// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeIcon = document.getElementById('closeIcon');
  
  // Abrir el menú al hacer clic en el icono hamburguesa
  menuIcon.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Evitar scroll mientras el menú está abierto
  });
  
  // Cerrar el menú al hacer clic en el icono X
  closeIcon.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Restaurar scroll
  });
  
  // Cerrar el menú al hacer clic en un enlace
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = ''; // Restaurar scroll
      });
  });
  
  // Cerrar el menú cuando se haga clic fuera de él
  document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileMenu.contains(event.target) || menuIcon.contains(event.target);
      
      if (!isClickInsideMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = ''; // Restaurar scroll
      }
  });
  
  // Ajustar el menú cuando cambia el tamaño de la ventana
  window.addEventListener('resize', function() {
      if (window.innerWidth > 1024 && mobileMenu.classList.contains('active')) {
          // Restaurar vista normal en pantallas grandes
          mobileMenu.classList.remove('active');
          document.body.style.overflow = ''; // Restaurar scroll
      }
  });
});

// Animación de despliegue del menú al abrir
mobileMenu.style.transition = 'transform 0.3s ease-in-out';
menuIcon.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(0)'; // Despliega el menú
});

// Animación de cierre del menú al hacer clic en el icono
closeIcon.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateX(-100%)'; // Cierra el menú
});

// Cerrar el menú al hacer clic en el icono de menú si ya está abierto
menuIcon.addEventListener('click', function() {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenu.style.transform = 'translateX(-100%)'; // Cierra el menú
        document.body.style.overflow = ''; // Restaurar scroll
    }
});