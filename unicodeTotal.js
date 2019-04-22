/*
You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count += str.charCodeAt(i);
    }
    return count;
  }