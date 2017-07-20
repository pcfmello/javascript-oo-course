function Person() {
    // public attributes
    this.name = '';
    this.age = '';
    this.eyesColor = '';
    this.body = '';
    this.date = getDateNow();

    // private attributes
    var isActive = true;

    // public functions
    this.move = function() {
        console.log('I\'m moving...');
    };

    this.say = function() {
        console.log('Hello!');
    };

    this.see = function() {
        console.log('I\'m seeing...');
    };

    // private functions
    function getDateNow() {
        return new Date;
    }
}

