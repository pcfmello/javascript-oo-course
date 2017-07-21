var paulo = new Person();
paulo.setName('Paulo Cesar Ferreira de Mello');
paulo.setAge(33);
paulo.active();

var claudia = new Person();
claudia.setName('Claudia Rodrigues');
claudia.setAge(50);
claudia.active();

var  peopleList = [];
peopleList.push(paulo);
peopleList.push(claudia);

peopleList.forEach(function(data) {
    data.print();
});