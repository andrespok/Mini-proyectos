const box = document.querySelector(".box");
const x = document.querySelector(".offset-x");
const y = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".blur-spread");
const color = document.querySelector(".color");
const cssValue = document.querySelector(".css-value");

function updateBoxShadow() {
    const v = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}` ;

    cssValue.value = v;
    box.style.boxShadow = v;

}

[x, y, radius, spread, color].forEach(element =>{
    element.oninput = updateBoxShadow;
});

updateBoxShadow();