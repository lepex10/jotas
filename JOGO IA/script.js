const rainContainer = document.querySelector('.rain-container');
const numberOfDrops = 100; // Adjust this for more or fewer raindrops

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;
    rainContainer.appendChild(raindrop);

    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
        createRaindrop();
    });
}

for (let i = 0; i < numberOfDrops; i++) {
    createRaindrop();
}
