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

/*
function Main() {

    var getValue = function (message) {
        return parseFloat(window.prompt(message));
    };

    var deposit = function (bank) {
        var value = getValue('Deposit value:');
        bank.setAmount(bank.getAmount() + value);
        alert('Deposit success');
    };

    var withdraw = function (bank) {
        var value = getValue('Withdraw value:');
        if (bank.getAmount() >= value) {
            bank.setAmount(bank.getAmount() - value);
            alert('Withdraw success');
        } else {
            alert('Insufficient funds. Currently, the amount is of ' + bank.getAmount());
        }
    };

    var exitProgramming = function () {
        var isExit = confirm('Are you sure?');
        if (isExit) throw 'Exit programing';
    };

    var getAccountOptions = function () {
        return parseInt(window.prompt('Choose an option: \n 1 - Deposit \n 2 - Amount \n 3 - Show account information \n 4 - Exit program'));
    };

    var executeAccountOption = function (bank, option) {
        switch (option) {
            case 1: new BankStrategy(deposit, bank).doStrategy();
                break;
            case 2: new BankStrategy(withdraw, bank).doStrategy();
                break;
            case 3: bank.printInformation();
                break;
            case 4: exitProgramming();
                break;
            default: alert('Invalid Option!');
        }
    };

    var accountFunctions = function (bank) {
        var option = getAccountOptions();
        executeAccountOption(bank, option);
        accountFunctions(bank);
    };

    var name = window.prompt('What\'s your bank name?');
    var account = window.prompt('What\'s your account number?');
    var amount = parseFloat(window.prompt('What\'s your amount value?'));

    var bank = new Bank(name, account, amount);
    bank.printInformation();

    accountFunctions(bank);
}
Main();*/
