const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

button1.addEventListener("click", multiply);
button2.addEventListener("click", divide);

function multiply() {
  num1 = document.querySelector("firstNumber").value;
  num2 = document.querySelector("secondNumber").value;
  document.querySelector("result").innerHTML = num1 * num2;
}

function divide() {
  num1 = document.querySelector("firstNumber").value;
  num2 = document.querySelector("secondNumber").value;
  document.querySelector("result").innerHTML = num1 / num2;
}
