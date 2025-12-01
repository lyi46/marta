document.addEventListener('DOMContentLoaded', () => {
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
                item.style.maxHeight = null;
                // Reset icon if you have one
                item.previousElementSibling.querySelector('.icon').textContent = '+';
            });

            if (!isActive) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.icon').textContent = '-';
            }
        });
    });

    // "Did You Know?" Fact Rotator
    const facts = [
        "MARTA is the 8th largest rapid transit system in the United States by ridership.",
        "The MARTA system operates 48 miles of rail track and 38 train stations.",
        "MARTA was formed in 1971 as a combination of the Atlanta Transit System and other suburban bus operations.",
        "The deepest station in the MARTA system is Peachtree Center, which is 120 feet below street level.",
        "MARTA's rail cars are powered by a third rail carrying 750 volts of DC electricity."
    ];

    const factElement = document.getElementById('fact-text');
    const newFactBtn = document.getElementById('new-fact-btn');

    if (factElement && newFactBtn) {
        newFactBtn.addEventListener('click', () => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            // Fade out
            factElement.style.opacity = 0;
            setTimeout(() => {
                factElement.textContent = randomFact;
                // Fade in
                factElement.style.opacity = 1;
            }, 300);
        });
    }
});
