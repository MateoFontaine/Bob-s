window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');

  // Agregar una clase para la animación
  splashScreen.classList.add('hide');

  // Esperar el final de la animación antes de ocultar completamente el splash screen
  splashScreen.addEventListener('animationend', () => {
    splashScreen.style.display = 'none'; // Oculta el splash screen
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block'; // Muestra el contenido principal
  });
});
