Camera.prototype.whoAreYou = function () {
  return `I am ${this.name}, a ${this.type} Camera`;
};

Camera.prototype.createdAt = function () {
  const years = new Date().getFullYear() - this.when;
  return `I am ${this.name}, a ${this.type} Camera, I am ${years} years old`;
};

console.log(cam.whoAreYou());
console.log(cam.createdAt());

// Revise / Change Year

Camera.prototype.revise = function (newYear, revised) {
  this.year = newYear;
  this.revised = true;
};

cam.revise("2019");
console.log(cam.createdAt());
