function Person(name, type) {
    Animal.call(this, name, type);
    this.active = true;
}

Person.prototype = new Animal();
Person.prototype.constructor = Person;

Person.prototype.isActive = function() {
    return this.active;
};

Person.prototype.toActive = function() {
    this.active = true;
};

Person.prototype.toInactive = function() {
    this.active = false;
};

Person.prototype.print = function() {
    console.log('Name:      ', this.name);
    console.log('Type:      ', this.type);
    console.log('Is Active: ', this.isActive());
    console.log(this.say());
    console.log(this.move());
};