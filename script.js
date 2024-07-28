// script.js
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.business-card');
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
