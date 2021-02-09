import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import Account from '../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.account = this.accountService.getAccount();
  }

}
