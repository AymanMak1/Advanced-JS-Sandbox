class CameraEs6 {
  constructor(name, type, sensor, lens, when) {
    this.name = name;
    this.type = type;
    this.sensor = sensor;
    this.lens = lens;
    this.when = when;
    //this.cmpt = 0;
  }
  getSummary() {
    return `I am ${this.name}, a ${this.type} Camera with a sensor of ${this.sensor}, 
    I'm using the ${this.lens} lens`;
  }
  createdAt() {
    const years = new Date().getFullYear() - this.when;
    return `I am ${this.name}, a ${this.type} Camera, I am ${years} years old`;
  }
  revise(newYear) {
    this.when = newYear;
    this.revised = true;
  }
  whoAreYou() {
    return `I am ${this.name}, a ${this.type} Camera`;
  }
  /*
    static cmptCamera() {
        this.cmpt++;
    }
  */
}

// Instantiate Object

const camEs6 = new CameraEs6(
  "ES6CAM",
  "Mirrorless Cam",
  "32Mpx",
  "STM 50mm 1.8",
  "2018"
);

console.log(camEs6);
camEs6.revise("2019");

console.log(camEs6);
//console.log(CameraEs6.cmptCamera());
