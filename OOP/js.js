// ::::::::::::::::::::::::::::::constructor in ES5

//constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };
}

//using prototype
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//instantiate object
const person1 = new Person('Jhone', 'Binn', '2000-01-21');
const person2 = new Person('Lia', 'Bin', '2002-02-12');

console.log(person1);
console.log(person2.getFullName())
console.log(person2.getBirthYear());


// ::::::::::::::::::::::::::::::constructor in ES6
//using classes

class Human {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiate object
const human1 = new Human('Jhone', 'Bin', '2000-01-21');
const human2 = new Human('Lia', 'Bin', '2002-02-12');
const all = { ...human1, ...human2 };

console.log(human1);
console.log(human2.getFullName());
console.log(human2.getBirthYear());
console.log(all);