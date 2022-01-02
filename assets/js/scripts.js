var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber; /* innerHTML chama o que tem dentro da variável */
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
}