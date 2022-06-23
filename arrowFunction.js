// function sum(a,b){
//     return a+b
// }

// // arrow function way
// const sum = (a,b) => a+b


let students = [{
    name: 'ram',
    class: 2,
    house: 'blue',
    age:17
}, {
    name: 'shyam',
    class: 5,
    house: 'green',
    age:16
}]

// traditional way

let studentAge = students.filter(function(student){
    return student.age > 16
})
console.log(studentAge);


// arrow function

let studentsAge = students.filter((student)=> student.age>16) 
console.log(studentsAge);
