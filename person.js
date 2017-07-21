function Person() {

    var name;
    var age;
    var active = true;
    var createdAt = new Date();

    this.getName = function() {
        return name;
    };

    this.setName = function(_name) {
        name = _name;
    };

    this.getAge = function() {
        return age;
    };

    this.setAge = function(_age) {
        age = _age;
    };

    this.isActive = function() {
        return active;
    };

    this.getCreatedAt = function() {
        return createdAt;
    };

    this.active = function() {
        active = true;
    };

    this.inactive = function() {
        active = false;
    }

    this.print = function() {
        console.log('== PERSON =======')
        console.log('Name: ', name);
        console.log('Age: ', age);
        console.log('Is active: ', active ? 'Yes' : 'No');
        console.log('Created at: ', createdAt.getDate() + '/' + createdAt.getMonth() + '/' + createdAt.getFullYear());
    }
}