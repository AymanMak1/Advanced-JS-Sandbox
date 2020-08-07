// Prototyping Concept

// an object behind the scenes

const s1 = "Hello World";
console.log(s1.toUpperCase());
console.log(typeof s1);

const s2 = new String("Hi world");
console.log(typeof s2);

// customized object

const Person = {
  fullName: "Ayman Makhoukhi",
  age: 20,
  profession: "Full Stack Dev & UI UX Designer",
  whoAmI: function () {
    return `${this.fullName} is ${this.age} and his profession is ${this.profession}`;
  },
};

console.log(Person.whoAmI());
console.log(Object.values(Person));
console.log(Object.keys(Person));
