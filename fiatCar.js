function FiatCar(model) {
    this.model = model;
}

// Inheriting the abstract class
FiatCar.prototype = Object.create(Car.prototype);