//20190316
//Today's toy problem.
//Given this data array make a list of all the names,  a list of everyone over the age of 25, a string made up of the first letter in everybody's name.


const data = [
    {
      name:'Josh',
      age: '26',
      position: 'Instructor'
    },
    {
      name:'Sam',
      age: '27',
      position: 'Mentor'
    },
    {
      name:'Jon',
      age: '24',
      position: 'Mentor'
    },
    {
      name:'Dan',
      age: '25',
      position: 'Instructor'
    },
    {
      name:'Luis',
      age: '35',
      position: 'Student'
    },
  ]




 function getNames(arr) {
     let names = [];
     for (var i = 0; i < arr.length; i++) {
         names.push(arr[i].name);
     }
     return names;
 }

// function getAge25(arr) {
//     let ageOver25 = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].age > 25) {
//             ageOver25.push(arr[i]);
//         }
//     }
//     return ageOver25;
// }
// function getInitials(arr) {
//     let firstInitial = "";
//     for (var i = 0; i < arr.length; i++) {
//         var first = arr[i].name[0];
//         firstInitial += first;
//     }
//     return firstInitial;
// }

// console.log(getInitials(data))


const names = data.map((e) => {
  return  e.name;
});

const over25 = data.filter((e) => {
    return Number(e.age) > 25;
});

const firstLetters = data.reduce((l, e) => {
     l += e.name[0] 
     return l
}, '');

console.log(names)

console.log(over25)

console.log(firstLetters)

