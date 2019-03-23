const people = [
    {name:'josh', age:26},
    {name:'lauren', age:22},
    {name:'eli', age:1},
    {name:'Dan', age:25},
]

const newPeople = [];

for(let i = 0; i< people.length; i++){
    people[i].ageIn10Years = people[i].age + 10
    newPeople.push(people[i]);
}
console.log(newPeople)

const newPeopleTwo = [];

people.forEach((e, i)=>{
    e.ageIn10Years = e.age + 10;
    newPeopleTwo.push(e);
})

console.log(newPeopleTwo)
