function generateBackground() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 64; i++){
        let block = document.createElement('div')
        block.classList.add('panel')
        block.addEventListener('mouseenter', changeBackground);
        block.addEventListener('mouseleave', changeBackground);
        block.addEventListener('click', changeBackground);
        container.appendChild(block);

    }
    
}

 function randomNumber(){
    return Math.floor(Math.random() * 255);
   
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }



function changeBackground(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
   // const rndColor = `red`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
    
}

function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
  }