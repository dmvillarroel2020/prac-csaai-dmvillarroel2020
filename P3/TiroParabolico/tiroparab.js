const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const timeDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result');
const angleSlider = document.getElementById('angle-slider');
const velocitySlider = document.getElementById('velocity-slider');
const shootButton = document.getElementById('shoot-button');
const resetButton = document.getElementById('reset-button');

const angleDisplay = document.getElementById("angleDisplay");
const speedDisplay = document.getElementById("speedDisplay");


let projectile = null;
let target = null;
let startTime = null;
let animationRequestId = null;

function Projectile(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.dx = null;
  this.dy = null;
  this.time = null;
  this.isMoving = false;
}

Projectile.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

Projectile.prototype.move = function() {
  if (!this.isMoving) {
    return;
  }
  const currentTime = Date.now();
  const elapsedTime = (currentTime - startTime) / 1000;
  if (this.time && elapsedTime > this.time) {
    this.isMoving = false;
    const distance = Math.sqrt((this.x - target.x) ** 2 + (this.y - target.y) ** 2);
    if (distance < target.radius) {
      resultDisplay.textContent = '¡Has acertado!';
    } else {
      resultDisplay.textContent = 'Has fallado :(';
    }
    cancelAnimationFrame(animationRequestId);
    return;
  }
  const angle = angleSlider.value;
  const velocity = velocitySlider.value;
  this.dx = velocity * Math.cos(angle * Math.PI / 180);
  this.dy = -velocity * Math.sin(angle * Math.PI / 180) + 9.81 * elapsedTime;
  this.x += this.dx;
  this.y += this.dy;
  this.draw();
  animationRequestId = requestAnimationFrame(this.move.bind(this));
};

function Target(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
}

Target.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function reset() {
  projectile = null;
  target = null;
  startTime = null;
  resultDisplay.textContent = '';
  clearCanvas();
}

shootButton.addEventListener('click', function() {
  if (projectile || target) {
    return;
  }
  const x = 50;
  const y = canvas.height - 50;
  const radius = 10;
  const color = 'orange';
  projectile = new Projectile(x, y, radius, color);
  projectile.draw();
  const targetX = canvas.width - 50;
  const targetY = canvas.height - 50;
  const targetRadius = 20;
  const targetColor = 'black';
  target = new Target(targetX, targetY, targetRadius, targetColor);
  target.draw();
  const time = Math.round((2 * velocitySlider.value * Math.sin(angleSlider.value * Math.PI / 180)) / 9.81 * 10) / 10;
  timeDisplay.textContent = `Tiempo de vuelo: ${time.toFixed(1)} s`;



  startTime = Date.now();
  projectile.time = time;
  projectile.isMoving = true;
  animationRequestId = requestAnimationFrame(projectile.move.bind(projectile));
});

resetButton.addEventListener('click', function() {
  reset();
});

angleSlider.addEventListener("input", () => {
    angleDisplay.textContent = `Ángulo: ${angleSlider.value} grados`;
    angleSlider.addEventListener('input', function() {
        clearCanvas();
        if (projectile) {
            projectile.draw();
        }
        if (target) {
            target.draw();
        }
        });
});
  


speedSlider.addEventListener("input", () => {
  speedDisplay.textContent = `Velocidad: ${speedSlider.value} m/s`;
        velocitySlider.addEventListener('input', function() {
        timeDisplay.textContent = '';
        });
});



reset();


