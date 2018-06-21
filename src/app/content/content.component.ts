import { Component, OnInit } from '@angular/core';
import {DonationCamp} from './donation-camp';

import { DonarService } from '../donar.service';
import {FilterPipe} from '../filter.pipe';
import { BloodDonar } from './blood-donar';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  camp:DonationCamp[] =[];
  bloodDonar : BloodDonar[];
  cols: any[];
  ClickHere:string ="Click Here";
  clickInfo: string;
  outline :boolean; 
  custFilter: string;
  constructor(private donarService:DonarService) { 
    
  }

  ngOnInit() {
    

const cmps : DonationCamp ={name:'Test',org:'Verizon',reqDate : new Date(),phone :9600706968};
const cmps1 : DonationCamp ={name:'Chris',org:'Vdsi',reqDate : new Date(),phone :9840050832,email : "smthsemon@gmail.com"};
this.CampResponse(cmps,cmps1);
this.cols = [
  { field: 'name', header: 'Name' },
  {field: 'org', header: 'Org' },
  { field: 'reqDate', header: 'ReqDate' },
  { field: 'phone', header: 'Phone' },
  { field: 'email', header: 'Email' }
];

this.donarServ();


  }


   CampResponse(...camps:DonationCamp[])
  {
  camps.forEach(element => {console.log(element.org+" : "+ element.reqDate  +" : "+element.phone
  +"Email :"+element.email)
this.camp.push(element);  
}
      
  );
  }
  donarServ() :void{
    this.donarService.findAll().subscribe(data =>
      this.bloodDonar= data, err => console.log(err)  
    );
  }
  showDialog()
  {
    this.clickInfo ="HI coming on click";
    this.outline = !this.outline;
  }
}
