const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
    
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = parseInt(getComputedStyle(mario).bottom);

  if (pipePosition > 0 && pipePosition < 150 && marioPosition < 80) {
    clearInterval(loop);
    pipe.style.animation = "none";
    mario.style.animation = "none";
    mario.src = "./imagens/game-over.png";
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);