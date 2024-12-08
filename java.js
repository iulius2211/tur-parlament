document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        // Toggle accordion item state
        button.classList.toggle('active');

        // Adjust max-height for accordion content
        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = '100px';
            icon.textContent = '−'; // Setează iconița ca minus
        } else {
            accordionContent.style.maxHeight = 0;
            icon.textContent = '+'; // Setează iconița ca plus
        }
    });
});
