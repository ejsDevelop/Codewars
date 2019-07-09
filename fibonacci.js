


function fibbonacciGenerator(num1, num2, numberToStopAt) {

  if (num1 === 1 && num2 === 1) {
      
  console.log(num1);
  console.log(num2);

  }

  let num3 = (num1 + num2);

  console.log(num3);

  if (num3 <= numberToStopAt) {
      fibbonacciGenerator(num2, num3, numberToStopAt);
  }

};