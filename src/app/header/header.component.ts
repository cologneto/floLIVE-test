import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() passwordNumber: string;
  @Input() avatarUrl: string;

  ngOnInit(): void {
  }

}
