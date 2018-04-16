/**
 * Configure ScrollReveal and target classes
 * only used on about page and case studies
 */
window.sr = ScrollReveal();
var srConfig = {
  scale: 1,
  origin: 'bottom',
  distance: '20px',
  reset: false,
  duration: 800,
  delay: 0
};

sr.reveal('.scroll-reveal', srConfig);
sr.reveal('.image-block', srConfig);
sr.reveal('.code-block', srConfig);
