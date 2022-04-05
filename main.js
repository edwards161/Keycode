const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const displayCodeDiv = document.querySelector('.keyCode'); /* */
const displayWhich = document.querySelector('.which h2');

window.addEventListener('keydown', (e) => {
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    displayWhich.innerText = e.which;
})

    /*whichDisplay.textcontent = event.which*/