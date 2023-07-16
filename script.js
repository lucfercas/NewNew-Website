//buttons & links

const aboutBtn = document.getElementById('info1');
const whyFacBtn = document.getElementById('info2');
const whySdBtn = document.getElementById('info3');

const gameBtn = document.getElementById("game");
const GitHubBtn = document.getElementById("repo")

const aboutDiv = document.getElementById('about');
const whyFacDiv = document.getElementById('why-fac');
const whySdDiv = document.getElementById('why-sd');

gameBtn.addEventListener("click", () => {
    GoToGame();
});

function GoToGame() {
    window.location = "https://lucfercas.github.io/NEW-Game/", '_blank';
}

GitHubBtn.addEventListener("click", () => {
    GoToRepo();
});

function GoToRepo() {
    window.open("https://github.com/lucfercas/NewNew-Website", '_blank');
}

aboutBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'block';
    whyFacDiv.style.display = 'none';
    whySdDiv.style.display = 'none';
});

whyFacBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'none';
    whyFacDiv.style.display = 'block';
    whySdDiv.style.display = 'none';
});

whySdBtn.addEventListener('click', () => {
    aboutDiv.style.display = 'none';
    whyFacDiv.style.display = 'none';
    whySdDiv.style.display = 'block';
});

//Live clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    const t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime()



//particle background

const PARTICLE_QUANT = 1500;
const BOUNCE = -1;
const PARTICLE_COLOR = 'green';
const ARC_RADIUS = 2;

class Particles {
  constructor(element) {
    if (!element) return;
    this.element = element;
    this.canvas = this.element;
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.lastTimeStamp = null;
    this.particles = [];
    this.init();
  }

  init() {
    this.lastTimeStamp = new Date().getTime();

    for (let i = 0; i < PARTICLE_QUANT; i++) {
      const particle = {};
      particle.x = Math.random() * this.canvasWidth;
      particle.y = Math.random() * this.canvasHeight;
      particle.vx = Math.random() - 0.5;
      particle.vy = Math.random() - 0.5;
      this.particles.push(particle);
    }

    this.renderLoop();
  }

  update() {
    for (let i = 0; i < PARTICLE_QUANT; i++) {
      const particle = this.particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x > this.canvasWidth) {
        particle.x = this.canvasWidth;
        particle.vx *= BOUNCE;
      } else if (particle.x < 0) {
        particle.x = 0;
        particle.vx *= BOUNCE;
      }

      if (particle.y > this.canvasHeight) {
        particle.y = this.canvasHeight;
        particle.vy *= BOUNCE;
      } else if (particle.y < 0) {
        particle.y = 0;
        particle.vy *= BOUNCE;
      }
    }
  }

  draw() {
    if (!this.context) return;
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.strokeStyle = PARTICLE_COLOR;

    for (let i = 0; i < PARTICLE_QUANT; i++) {
      const particle = this.particles[i];
      this.context.save();
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, ARC_RADIUS, 0, Math.PI * 2);
      this.context.stroke();
      this.context.restore();
    }
  }

  renderLoop() {
    requestAnimationFrame(() => {
      this.renderLoop();
      this.update();
      this.draw();
    });
  }
}

const particlesElement = document.getElementById('js-particles');
const particles = new Particles(particlesElement);