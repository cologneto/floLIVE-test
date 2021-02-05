import Transaction from './transaction.model';

export default class Account {
  public passwordNumber: number;
  public avatarUrl: string;
  public transactionHistory: Array<Transaction>;

  constructor(
    passwordNumber: number,
    avatarUrl: string,
    transactionHistory: Array<Transaction>) {
      this.passwordNumber = passwordNumber;
      this.avatarUrl = avatarUrl;
      this.transactionHistory = transactionHistory;
  }
}
