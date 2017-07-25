function Animal(name, type) {
    this.name = name;
    this.type = type;
}

Animal.prototype.say = function() {
    console.log('I\'m saying');
};
Animal.prototype.move = function() {
    console.log('I\'m moving');
};

Animal.prototype.print = function() {
    console.log('Name: ', this.name);
    console.log('Type: ', this.type);
    console.log('==================================');
};
