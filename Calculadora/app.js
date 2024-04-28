//Para no duplicar los operadores

let lastChar = null;

function handleNumberClick(num) {
  let display = document.getElementById("ans");
  display.value += num;
  display.scrollLeft = display.scrollWidth; //Para que al final siempre se vea el numero mas nuevo
  lastChar = num;
}


// Creando la tecla DEL acá abajo
function backspace() {
    let display = document.getElementById("ans");
    let value = display.value;
    display.value = value.slice(0, -1);
    lastChar = display.value.slice(-1);
}


// Permitir decimales 1 sola vez antes del OP y una sola vez después del OP

let allowDecimal = true;

function handleButtonClick(button) {
  const calculatorScreen = document.getElementById("ans");
  
  if (button === ".") {
    if (!allowDecimal) {
      return;
    }
    calculatorScreen.value += button;
    allowDecimal = false;
  } 
    else {
    calculatorScreen.value += button;
    allowDecimal = true;
  }
}

//También haremos que un operador pueda reemplazar al otro si se presiona uno después del otro

function handleOperatorClick(operator) {
  const calculatorScreen = document.getElementById("ans");
  const lastChar = calculatorScreen.value[calculatorScreen.value.length - 1];
  if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1);
  }
  calculatorScreen.value += operator;
  allowDecimal = true;
  
}

function resetCalculator() {
  const calculatorScreen = document.getElementById("ans");
  calculatorScreen.value = "";
  allowDecimal = true;
}

document.getElementById("punto").addEventListener("click", function() {
  const calculatorScreen = document.getElementById("ans");
  const lastChar = calculatorScreen.value[calculatorScreen.value.length - 1];
  if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
    calculatorScreen.value += "0";
  }
  handleButtonClick(".");
});

document.getElementById("mas").addEventListener("click", function() {
  handleOperatorClick("+");
});

document.getElementById("menos").addEventListener("click", function() {
  handleOperatorClick("-");
});

document.getElementById("por").addEventListener("click", function() {
  handleOperatorClick("*");
});

document.getElementById("division").addEventListener("click", function() {
  handleOperatorClick("/");
});

//Solucionando el problema de sumar 0.3+0.6 = 0.8999999
// Ahora se va a redondear, pero para obtener una mejor precisión de números es necesario utilizar una libreria como math.js

function calculateResult() {
  const calculatorScreen = document.getElementById("ans");
  const expression = calculatorScreen.value;

  if (expression) {
    const result = eval(expression);
    const roundedResult = Math.round(result * 100) / 100; // Redondear a dos decimales
    calculatorScreen.value = roundedResult.toString();
  }

}

document.getElementById("igual").addEventListener("click", function() {
  calculateResult();
});