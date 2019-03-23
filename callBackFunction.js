//Write a function that takes in an array and callback function. 
// The call back function should check to see if element is greater than 10. 
// The function should check using the callback function where or not the element is greater than 10.
// If it is add the new number to the new array. The function should return the new array. 

//Input
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90];

//1. Write call back function
    //a. Func takes in num and return true if value of number is great than 10; 

//const isGreaterthan10 = (num) => {
    //return num > 10;
//}

//2. Set up function to take in array and your callback. 
    // const arrGreaterThan10 = (arr, callback) => {
    //     const newArr = [];
    //     return newArr;
    // }
//3. Write for/while loop to check each element in the array. 
    // const arrGreaterThan10 = (arr, callback) => {
    //     const newArr = [];

    //     for(let i = 0; i < arr.length; i++){

    //     }

    //     return newArr;
    // }
//4. Write if statement that uses that callback function to see if the value is greater than 10.

    // const arrGreaterThan10 = (arr, callback) => {
    //     const newArr = [];

    //     for(let i = 0; i < arr.length; i++){
    //         if(callback(arr[i])){

    //         }
    //     }

    //     return newArr;
    // }
//5. Write push statement in the if block to push the number to the newArr; 

    const isGreaterthan10 = (num) => {
        return num > 10;
    }

    const arrGreaterThan10 = (arr, callback) => {
        const newArr = [];

        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i])){
                newArr.push(arr[i])
            }
        }

        return newArr;
    }

console.log(arrGreaterThan10(numbers, isGreaterthan10));

// Output
// [20,30,40,50,60,70,80,90]
