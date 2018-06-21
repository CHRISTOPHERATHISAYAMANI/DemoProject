import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childCall :string;
  @Output() toParent = new EventEmitter<string>();
  @Output('aliasParentMap') toParentMap = new EventEmitter<Map<string,string[]>>();
  @Output('getInputParentMap') toIntputParentMap = new EventEmitter<string[]>();
  parentValue: string;
  passToParentTxt: string;
  donarList : Map<string,string[]>;
  constructor() { }

  ngOnInit() {
    console.log("Input will be available only in ngOnInit not in constructor"+this.childCall);
    this.donarList = new Map<string,string[]>();
    this.donarList.set("restaurant",['Aasif','RR']);
    this.donarList.set("Online Store",['Zomata','Uber Eats']);
  }
  addData()
  {
this.toParent.emit(this.childCall+' : '+ this.passToParentTxt);
this.toParentMap.emit(this.donarList);
this.toIntputParentMap.emit(this.donarList.get(this.passToParentTxt));
console.log(  this.donarList.get('key1'))
console.log("addData "+this.childCall);
  }
}
