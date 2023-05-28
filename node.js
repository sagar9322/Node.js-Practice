// console.log("Hello World");

const multiply = (a,b) => {
    return a*b;
}
console.log(multiply(2,3));

const student = {
    name: "sagar",
    age: 30,
    greet: function() {
        console.log(`Hi, I am ${this.name}`);
    }
}
console.log(student.greet());
