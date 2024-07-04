const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const numSegments = 8;
const segmentColors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF", "#33FFFF", "#FF5733", "#33FF57"];
const segmentNames = ["1", "2", "3", "4", "5", "6", "7", "8"];

let currentAngle = 0;
let spinTimeout = null;
let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;

function drawRouletteWheel() {
    const outsideRadius = 200;
    const textRadius = 160;
    const insideRadius = 125;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = "bold 14px Helvetica, Arial";

    for (let i = 0; i < numSegments; i++) {
        const angle = (i * 2 * Math.PI) / numSegments;
        ctx.fillStyle = segmentColors[i];

        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + 2 * Math.PI / numSegments, false);
        ctx.arc(250, 250, insideRadius, angle + 2 * Math.PI / numSegments, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "#FFFFFF";  // Cor do texto dos prêmios
        ctx.translate(250 + Math.cos(angle + Math.PI / numSegments) * textRadius,
            250 + Math.sin(angle + Math.PI / numSegments) * textRadius);
        ctx.rotate(angle + Math.PI / numSegments);
        const text = segmentNames[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    }

    // Flecha
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    currentAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    requestAnimationFrame(rotateWheel);
}

function stopRotateWheel() {
    const degrees = currentAngle * 180 / Math.PI + 90;
    const arcd = 360 / numSegments;
    const index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = 'bold 30px Helvetica, Arial';
    ctx.fillStyle = "#FFFFFF";  // Cor do texto do prêmio selecionado
    const text = segmentNames[index];
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
    ctx.restore();
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    requestAnimationFrame(rotateWheel);
}

drawRouletteWheel();
