import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentToCall: string ="passing value to child";
  childValue: string;
  donarListMapFrmChild : Map<string,string[]>;
  donarInFrmChild : string[];
  constructor() { }

  ngOnInit() {
  }
  onChange(event)
  {
    console.log("onChange",event);
    this.childValue =event;
  }
  onCall(event)
  {
    console.log("onCall",event);
    this.donarListMapFrmChild =event; 
  }
  searchIn(event)
  {
    this.donarInFrmChild =event;
    console.log("searchIn",event);
  }
  getKeys(map){
    
    if(map)
    return Array.from(map.values());
  }
}
