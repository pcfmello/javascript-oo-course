// Abstract class
function Car() {
    throw 'This is an abstract class';
}

Car.prototype.model = '';
Car.prototype.accelerate = function() {
    console.log('Accelerating a', this.model);
};