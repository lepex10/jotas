const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mosquitoImage = new Image();
mosquitoImage.src = 'images/mosquito.png';

const racketImage = new Image();
racketImage.src = 'images/racket.png';

let mosquitos = [];
let score = 0;
let timeLeft = 60; // Tempo em segundos
const mosquitoSize = 50; // Ajuste o tamanho do mosquito

class Mosquito {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.drawImage(mosquitoImage, this.x, this.y, mosquitoSize, mosquitoSize);
    }

    checkHit(mouseX, mouseY) {
        const distance = Math.sqrt((mouseX - this.x - mosquitoSize / 2) ** 2 + (mouseY - this.y - mosquitoSize / 2) ** 2);
        return distance < mosquitoSize / 2;
    }
}

function spawnMosquito() {
    const x = Math.random() * (canvas.width - mosquitoSize);
    const y = Math.random() * (canvas.height - mosquitoSize);
    mosquitos.push(new Mosquito(x, y));
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar a paisagem de fundo
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    
    // Desenhar mosquitos
    mosquitos.forEach(mosquito => mosquito.draw());
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `Tempo: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        // Final do jogo
        alert('Tempo esgotado! Pontuação final: ' + score);
    }
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    mosquitos = mosquitos.filter(mosquito => {
        if (mosquito.checkHit(mouseX, mouseY)) {
            score += 10; // Pontuação por mosquito
            return false;
        }
        return true;
    });

    document.getElementById('score').textContent = `Pontuação: ${score}`;
});

const backgroundImage = new Image();
backgroundImage.src = 'images/background.jpg';

backgroundImage.onload = () => {
    gameLoop();
    updateTimer();
};

// Adiciona um mosquito a cada 2 segundos
setInterval(spawnMosquito, 2000);
