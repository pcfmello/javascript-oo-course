function FiatCar(model) {
    this.model = model;
}

// Inheriting the abstract class
FiatCar.prototype = Object.create(Car.prototype);
FiatCar.prototype.toInstanceCar = function() {
    try {
        var car = new Car();
    } catch(error) {
        console.error('Car class cannot be instance');
    }
};