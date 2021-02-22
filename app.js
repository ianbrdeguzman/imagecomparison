const slide  = document.querySelector('.slide-two');

window.addEventListener('mousemove', (e) => { 
    slide.style.left = `${e.clientX}px`;
});

window.addEventListener('touchmove', (e) => {
    slide.style.left = `${e.touches[0].clientX}px`;
});