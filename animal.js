var Animal = function() {

};

Animal.prototype.name = 'No name';
Animal.prototype.type = 'No type';
Animal.prototype.say = function() {
    console.log('I\'m saying');
};
Animal.prototype.move = function() {
    console.log('I\'m moving');
};

console.log('Animal Object', new Animal());
var cat = new Animal();
cat.name = 'Joe';
cat.type = 'Cat';
cat.say();
cat.move();
console.log('Cat Animal', cat);