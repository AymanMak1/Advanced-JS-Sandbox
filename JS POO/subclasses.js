class CameraEs6 {
  constructor(name, type, sensor, lens, when) {
    this.name = name;
    this.type = type;
    this.sensor = sensor;
    this.lens = lens;
    this.when = when;
  }
  getSummary() {
    return `I am ${this.name}, a ${this.type} Camera with a sensor of ${this.sensor}, 
    I'm using the ${this.lens} lens`;
  }
}

// Magazine Subclass

class Cam extends CameraEs6 {
  constructor(name, type, sensor, lens, when, processor) {
    super(name, type, sensor, lens, when);
    this.processor = processor;
  }
}

// Instantiate Cam

const cam4 = new Cam(
  "ES6CAM",
  "Mirrorless Cam",
  "32Mpx",
  "STM 50mm 1.8",
  "2018",
  "DIGIC 8"
);

console.log(cam4.getSummary());
console.log(cam4.processor);
