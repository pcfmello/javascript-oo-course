var paulo = new Person('Paulo Cesar Ferreira de Mello', 'Pessoa');
var claudia = new Person('Claudia Rodrigues', 'Pessoa');
var lucas = new Person('Lucas Rodrigues', 'Pessoa');

var peopleList = [];
peopleList.push(paulo);
peopleList.push(claudia);
peopleList.push(lucas);

peopleList.forEach(function(data) {
    data.print();
});

lucas.name = 'Lucas Freitas';
lucas.toInactive();

peopleList.forEach(function(data) {
    data.print();
});

lucas.toActive();
peopleList.forEach(function(data) {
    data.print();
});

console.log('===== STATIC BASE FUNCTIONS ATTRIBUTES =====');

console.log('Current year:    ', BaseFunctions.currentYear);
console.log('PI value:        ', BaseFunctions.pi);
console.log('Sum two numbers: ', BaseFunctions.sum(35, 20));
BaseFunctions.printTextInAlert('I constructed some static functions and attributes...');

console.log('===== METHODS OVERRIDE =====');
var rio = new Animal('jow', 'Dog');
var jaque = new Person('Jaqueline', 'Pessoa');

rio.print();
jaque.print();