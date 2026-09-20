// Loader minimo: a plataforma real e carregada via server.url do Capacitor.
// Esse arquivo existe apenas para satisfazer o webDir e mostrar a tela de
// abertura nativa enquanto a webview navega para www.lordchess.com.
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }
});
