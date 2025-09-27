// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect
    const typedElement = document.getElementById('typed-text');
    const phrases = [
      'Hi, I\'m Theodore.',
      'I build web & mobile apps.',
      'React Native • JavaScript • PHP • C#'
    ];
    let pIndex = 0;
    let cIndex = 0;
    let deleting = false;
  
    function typeLoop() {
      const current = phrases[pIndex];
      if (!deleting) {
        typedElement.textContent = current.slice(0, cIndex + 1);
        cIndex++;
        if (cIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1600);
        } else {
          setTimeout(typeLoop, 80);
        }
      } else {
        typedElement.textContent = current.slice(0, cIndex - 1);
        cIndex--;
        if (cIndex === 0) {
          deleting = false;
          pIndex = (pIndex + 1) % phrases.length;
          setTimeout(typeLoop, 400);
        } else {
          setTimeout(typeLoop, 40);
        }
      }
    }
    typeLoop();
  
    // Header toggle for mobile
    const navToggle = document.getElementById('nav-toggle');
    const siteNav = document.getElementById('site-nav');
  
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('show');
    });
  
    // Scrollspy - highlight active nav link
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  
    function onScroll() {
      const scrollPos = window.scrollY + 120; // offset for header
      let currentIndex = 0;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= scrollPos) currentIndex = i;
      });
  
      navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === currentIndex);
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  
    // Smooth scroll for anchor links (native behaviour kept for accessibility; enhance if needed)
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // close nav on mobile
        if (siteNav.classList.contains('show')) {
          siteNav.classList.remove('show');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  
    // footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Optionally: intercept contact form to show success message (if using Formspree you can rely on its redirect)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        // let it submit normally; you can add custom validation or AJAX later
        // e.preventDefault();
        // show a loader, send fetch to Formspree, etc.
      });
    }
  });
  