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