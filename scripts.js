function generateBackground() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 64; i++){
        let block = document.createElement('div')
        block.classList.add('panel')
        block.addEventListener('mouseenter', function() { changeBackground('rgb(0, 0, 0)')});
        block.addEventListener('mouseleave', function() { changeBackground('blue')});
        container.appendChild(block);

    }
    
}

const randomNumber = function (){
   let first = Math.random() * 255
   first = Math.floor(first);
   return first
}

function randomColor(){

}

function changeBackground(color) {
    let one = randomNumber();
    let two = randomNumber();
    let three = randomNumber();
    let panel = document.querySelector('.panel');
    panel.style.backgroundColor = `rgb(${one},${two},${three})`
}