function generateBackground() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 64; i++){
        let block = document.createElement('div')
        block.classList.add('panel')
        container.appendChild(block);

    }
}