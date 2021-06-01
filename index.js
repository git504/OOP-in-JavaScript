console.log(typeof []); //object
console.log(typeof ""); //string

/////////////////////////////////////////
class Person {

    constructor(name, age) {
        this.age = age;
        this.name = name;
        this.job = "";
    }

    getName = () => {
        return this.name 
        //getName is a methode = function
    };
    
    getAge = () => {
        return this.age 
        //getAge is a methode = function
        };

    setJob = (job) => {
        this.job = job;

    }


}

let Person1 = new Person("Pedro", 19)
let Person2 = new Person ("Moise Kean", 23)

console.log(Person1.name);
console.log(Person2.name);

console.log(Person1.getName());
console.log(Person1.getAge());

console.log(Person2.getName());
console.log(Person2.getAge());

////////////////////////////////////////////////////
class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    };
    getAdress = () => {
        return this.address;
    };

    getPrice = () => {
        return this.price;
    };

    getResidents = () => {
        return this.residents;
    };

    addResident = (resident) => {
        this.residents.push(resident);
    };
}

let Pedro = new Person("Pedro", 19)
let David = new Person("David", 21)

let house = new House("randomaddress", 280000, [David])
console.log(house.getResidents());

let Paulo = new Person("Paulo",19);
Pedro.setJob("Developper");
house.addResident(Pedro);
house.addResident(Paulo);
console.log(house.getResidents());

/////////////////////////////////////////////////////
