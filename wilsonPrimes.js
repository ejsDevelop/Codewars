/*     Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

*/

/*      Wilson prime
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
Wilson prime
Named after	John Wilson
Publication year	1938[1]
Author of publication	Emma Lehmer
No. of known terms	3
First terms	5, 13, 563
Largest known term	563
OEIS index	
A007540
Wilson primes: primes p such that (p-1)! == -1 (mod p^2)
A Wilson prime, named after English mathematician John Wilson, is a prime number p such that p2 divides (p − 1)! + 1, where "!" denotes the factorial function; compare this with Wilson's theorem, which states that every prime p divides (p − 1)! + 1.

The only known Wilson primes are 5, 13, and 563 (sequence A007540 in the OEIS); if any others exist, they must be greater than 2×1013.[2] It has been conjectured that infinitely many Wilson primes exist, and that the number of Wilson primes in an interval [x, y] is about log(log(y)/log(x)).[3]     */


const amIWilson = p => [5, 13, 563].indexOf(p) > -1

//another option

function amIWilson(p) {
    function fact(x) {
      return x <= 1 ? 1 : x * fact(x-1);
    }
    
    return (fact(p-1) + 1) / (p*p) % 1 === 0;
  }