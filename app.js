class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  toString() {
    return `The motorcycle is a ${this.year} ${this.make} ${this.model}`;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(cap) {
    this.vehicles = [];
    this.capacity = cap;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles allowed!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we are full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added.";
  }
}
