//const startButton = document.querySelector('button');
//startButton.addEventListener('click', generateBackground);

document.addEventListener('DOMContentLoaded', generateBackground(16))

//generates the background divs
function generateBackground(number) {
    const container = document.querySelector('#container');
    for (let i = 0; i < number; i++) {
        let column = document.createElement('div')
        column.classList.add('column')
        container.appendChild(column);

        for (let j = 0; j < number; j++) {
            let block = document.createElement('div')
            block.classList.add('block')
            block.addEventListener('mouseenter', changeBackground);
            block.addEventListener('mouseleave', changeBackground);
            column.appendChild(block);
        }

    }

}



function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


// changes the target to a random color
function changeBackground(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;

    e.target.style.backgroundColor = rndCol;


}

// write a function that calculates the width of the added divs based on the number input by the user

// if input = n then width of div = co