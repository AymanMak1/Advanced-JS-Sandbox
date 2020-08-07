// Object of Protos

const camProtos = {
  getSummary: function () {
    return `I am ${this.name}, a ${this.type} Camera with a sensor of ${this.sensor}, 
        I'm using the ${this.lens} lens`;
  },
  createdAt: function () {
    const years = new Date().getFullYear() - this.when;
    return `I am ${this.name}, a ${this.type} Camera, I am ${years} years old`;
  },
};

// Create object

const cam3 = Object.create(camProtos, {
  name: { value: "Canon T8i" },
  type: { value: "DSLR" },
});

console.log(cam3);
