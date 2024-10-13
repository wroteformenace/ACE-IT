// Parallax Scrolling Effect
window.addEventListener('scroll', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  
