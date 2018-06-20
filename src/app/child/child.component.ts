import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childCall :string;
  @Output() toParent = new EventEmitter<string>();
  parentValue: string;
  passToParentTxt: string;
  constructor() { }

  ngOnInit() {
    console.log("Input will be available only in ngOnInit not in constructor"+this.childCall);
  }
  addData()
  {
this.toParent.emit(this.childCall+' : '+ this.passToParentTxt);
console.log("addData "+this.childCall);
  }
}
