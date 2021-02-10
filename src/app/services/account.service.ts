import { Injectable } from '@angular/core';

import Account from '../models/account.model';
import Transaction from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() { }

  getAccount(): Account {
    const transactionHistory = [
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009')
    ];
    const avatarUrl = '../assets/images/mgidarccontentnick.comc008fa9d_d.0.jpg';
    const passwordNumber = 123456;

    return new Account(passwordNumber, avatarUrl , transactionHistory);
  }

}
