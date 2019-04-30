/*
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
  }
  
  or 

  function find_average(array) {
    return array.reduce((result, current) => result + current, 0) / array.length;
  }