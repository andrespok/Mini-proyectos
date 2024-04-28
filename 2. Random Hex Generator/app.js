const colors = document.querySelectorAll('.color-box h2');
const button = document.querySelector('button')
const hexh2 = document.querySelectorAll('h2')

function generateColors(){
  colors.forEach((color) => {
    let hexCode = '#' + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexCode;
    color.innerHTML = hexCode
    color.addEventListener('click', function () {
        //copy text
      const colorHex = color.textContent;
      const textarea = document.createElement('textarea');
      textarea.value = colorHex;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);

    });
  })
};

generateColors();

button.addEventListener('click', function(){
  generateColors();
});

