window.addEventListener('load', () => {
    setTimeout(() => {
      const splashScreen = document.getElementById('splash-screen');
      splashScreen.style.transition = 'opacity 0.5s ease';
      splashScreen.style.opacity = '0'; // Asegura que desaparezca suavemente después de la animación
  
      setTimeout(() => {
        splashScreen.style.display = 'none'; // Oculta completamente el splash screen
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block'; // Muestra el contenido principal
      }, 500); // Tiempo para el desvanecimiento
    }, 1000); // 3000 ms = duración del splash screen
  });
  