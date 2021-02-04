export default class Transaction {
  public currency: string;
  public amount: number;
  public date: string;

  constructor(currency: string, amount: number, date: string) {
    this.currency = currency;
    this.amount   = amount;
    this.date     = date;
  }
}
