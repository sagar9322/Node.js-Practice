// console.log("Hello World");

// const multiply = (a,b) => {
//     return a*b;
// }
// console.log(multiply(2,3));

// const student = {
//     name: "sagar",
//     age: 30,
//     greet: function() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// console.log(student.greet());

const array = ['apple', 'oranges', '', 'mango', '', 'lemon'];
let newArr = array.map((item) => {
    if(item == ''){
        return item = "empty string";
    }
    else return item;
})
console.log(newArr);