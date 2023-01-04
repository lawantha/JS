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

//man constructor
function Man(firstName, lastName, dob, age) {
    Person.call(this, firstName, lastName, dob);

    this.age = age;
}

//inherit prototype method
Man.prototype = Object.create(Person.prototype);

//instantiate Man object
const man1 = new Man('athure', 'pthure', ' 2001-10-21', '21');


console.log(man1);
console.log(man1.getFullName);