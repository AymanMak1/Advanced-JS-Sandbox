// Magazine Constructor

function Magazine(name, type, sensor, lens, when, magazineName) {
  Camera.call(this, name, type, sensor, lens, when);
  this.magazineName = magazineName;
}
// Inherite Prototype

Magazine.prototype = Object.create(Camera.prototype);

// Instantiate Magazine Object
const mag = new Magazine(
  "Canon m50",
  "Mirrorless",
  "24Mpx",
  "STM 50mm 1.2",
  "2018",
  "Mabroka.ma"
);

// We can Use everything from the other constructor that we inherite from
console.log("Inheritance : " + mag.getSummary());

// Use the magazine Constructor

Magazine.prototype.constructor = Magazine;
//Magazine.prototype.getSummary = function () {};
console.log(mag);
