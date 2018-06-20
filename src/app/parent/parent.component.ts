import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentToCall: string ="passing value to child";
  childValue: string;
  constructor() { }

  ngOnInit() {
  }
  onChange(event)
  {
    console.log("onChange",event);
    this.childValue =event;
  }
}
