function Person() {
    this.name = '';
    this.age = '';
    this.eyesColor = '';
    this.body = '';

    this.move = function() {
        console.log('I\'m moving...');
    };

    this.say = function() {
        console.log('Hello!');
    };

    this.see = function() {
        console.log('I\'m seeing...');
    };
}

var objPerson = new Person();

console.log(typeof Person);
console.log(typeof objPerson);

objPerson.name = 'Paulo Cesar';
objPerson.age = 33;
objPerson.eyesColor = 'Green';
objPerson.body = 'Good';
console.log(objPerson);
objPerson.say();

var objPerson2 = new Person();
objPerson2.name = 'Marcos Cesar';
objPerson2.age = 44;
objPerson2.eyesColor = 'Brown';
objPerson2.body = 'Thin';
console.log(objPerson2);
objPerson2.see();

