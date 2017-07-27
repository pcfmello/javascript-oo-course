function BankStrategy(strategy, bank) {
    this.strategy = strategy;
    this.bank = bank;
}
BankStrategy.prototype.doStrategy = function() {
    return this.strategy(this.bank);
};