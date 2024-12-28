window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  
  // Asegúrate de que todo está cargado antes de ocultar el splash screen
  splashScreen.style.transition = 'opacity 0.5s ease';
  splashScreen.style.opacity = '0'; // Desvanece el splash screen
  
  splashScreen.addEventListener('transitionend', () => {
    // Cuando la transición termine, oculta completamente el splash screen
    splashScreen.style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block'; // Muestra el contenido principal
  });
});
