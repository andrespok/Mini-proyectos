const topLeftInput = document.getElementById('topleft')
const topRightInput = document.getElementById('topright')
const botLeftInput = document.getElementById('botleft')
const botRightInput = document.getElementById('botright')
const borderRadi = document.getElementById("border_radi")

function changeBorder() {

    const topLeftValue = topLeftInput.value + 'px';
    const topRightValue = topRightInput.value + 'px';
    const botLeftValue = botLeftInput.value + 'px';
    const botRightValue = botRightInput.value + 'px';

    borderRadi.style.borderRadius = `${topLeftValue} ${topRightValue} ${botRightValue} ${botLeftValue}`;
}

topLeftInput.addEventListener('input', changeBorder);
topRightInput.addEventListener('input', changeBorder);
botLeftInput.addEventListener('input', changeBorder);
botRightInput.addEventListener('input', changeBorder);

changeBorder();