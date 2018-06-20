import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
leftLogo: string;
rightLogo: string;
header: string;
  constructor() {
this.leftLogo = 'assets/img/maxresdefault.jpg';
this.rightLogo = 'assets/img/maxresdefault2.jpg';
this.header = 'assets/img/maxresdefault3.jpg';
  }
  ngOnInit() {
  }

}
