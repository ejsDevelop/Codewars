/* 
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

var greet_abe = function() {
    var name = 'Abe';
      return "Hello, " + name + '!';
    };
    
    var greet_ben = function() {
    var name = 'Ben';
      return "Hello, " + name + '!';
    };

//or

var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};