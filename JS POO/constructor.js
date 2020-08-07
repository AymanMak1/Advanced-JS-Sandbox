// Constructor
function Camera(name, type, sensor, lens, when) {
  this.name = name;
  this.type = type;
  this.sensor = sensor;
  this.lens = lens;
  this.when = when;
  this.getSummary = function () {
    return `I am ${this.name}, a ${this.type} Camera with a sensor of ${this.sensor}, 
    I'm using the ${this.lens} lens`;
  };
  /*
  this.whoAreYou = function () {
    return `I am ${this.name}, a ${this.type} Camera`;
  };*/
}

// Instantiate an object

const cam = new Camera(
  "Canon m50",
  "Mirrorless",
  "24Mpx",
  "STM 50mm 1.2",
  "2018"
);

const cam2 = new Camera("Lumix G7", "Mirrorless", "16Mpx", "Kit");

console.log(cam);

console.log(cam.name);

console.log(cam.getSummary());
console.log(cam2.getSummary());
