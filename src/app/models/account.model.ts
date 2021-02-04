import Transaction from './transaction.model';

export default class Account {
  public passwordNumber: number;
  public avatarUrl: string;
  public transactionHistory: Array<Transaction>;
  public suggestions: Array<string>;
  public phoneNumber: string;
  public mail: string;

  constructor(
    passwordNumber: number,
    avatarUrl: string,
    transactionHistory: Array<Transaction>,
    suggestions: Array<string>,
    phoneNumber: string,
    mail: string) {
      this.passwordNumber = passwordNumber;
      this.avatarUrl = avatarUrl;
      this.transactionHistory = transactionHistory;
      this.suggestions = suggestions;
      this.mail = mail;
  }
}
