console.log(typeof []); //object
console.log(typeof ""); //string

/////////////////////////////////////////
class Person {

    constructor(name, age) {
        this.age = age
        this.name = name
    }

    getName = () => {
        return this.name 
        //getName is a methode = function
    };
    
    getAge = () => {
        return this.age 
        //getAge is a methode = function
        };


}

let Person1 = new Person("Pedro", 19)
let Person2 = new Person ("Moise Kean", 23)

console.log(Person1.name);
console.log(Person2.name);

console.log(Person1.getName());
console.log(Person1.getAge());

console.log(Person2.getName());
console.log(Person2.getAge());

