function Bank(_name, _account, _amount) {
    var name = _name;
    var account = _account;
    var amount = _amount;

    this.getName = function() {
        return name;
    };
    this.setName = function(_name) {
        name = _name;
    };
    this.getAccount = function() {
        return account;
    };
    this.setAccount = function(_account) {
        account = _account;
    };
    this.getAmount = function() {
        return amount;
    };
    this.setAmount = function(_amount) {
        amount = _amount;
    };

    this.printInformation = function() {
        alert('Name:      ' + name +
              '\nAccount:  ' + account +
              '\nAmount:   ' + amount);
    }
}