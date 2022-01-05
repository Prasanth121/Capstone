import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateFormatterParams } from 'angular-calendar';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';
import * as moment from 'moment';
import { BookPropertyData } from '../model/bookedproperty';
import { bookedPropertyList } from '../model/bookedPropertyList';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {

  @Input()
  datefrom!:any;
  datefrom1!:any;
  date1!:string;
  date2!:string;
  totalDays:number|undefined;
  room!:number;
  sum:number|undefined;
  total_amount: number=0;
  tax:number|undefined;
  property:Property;
  getData!:BookPropertyData;
  booked:bookedPropertyList;
  idchecker!:number;
  email:any |null=localStorage.getItem('email');
  constructor(private route:ActivatedRoute,private ps:PropertyService,private router:Router) { 
    this.property=new Property('','','','','','');
    this.booked=new bookedPropertyList('','','','','','','','','','');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.ps.getSelectedPropertyId(parseInt(ids)).subscribe(data=>this.property=data);
    });
  }

  book(){
    this.route.paramMap.subscribe((params)=>{
    let price:string=<string>params.get('price');
    this.date1=this.datefrom;
    this.date2=this.datefrom1;
    this.datefrom = moment(this.datefrom);
    this.datefrom1 = moment(this.datefrom1);
    this.totalDays=Math.abs(this.datefrom.diff(this.datefrom1, 'days'));
    this.sum=(parseInt(price)*this.totalDays)*this.room;
    this.tax=Math.round(0.28*this.sum);
    this.total_amount=this.sum+this.tax;
  });
  }

  confirm(){
    this.getData={'date_from':this.date1,'due_date':this.date2,'no_of_nights':this.totalDays,'no_of_rooms':this.room,'subtotal':this.sum,'tax':this.tax,'total':this.total_amount};
    this.route.paramMap.subscribe((params)=>{
    let ids:string=<string>params.get('id');
    this.ps.bookedData(parseInt(ids),this.email,this.getData).subscribe(res=>{this.getcode(res.booked_id)});
    });
    
  }
  getcode(id:any){
    this.router.navigate(['ordersummery',id]);
  }

  isNotLogIn(){
    return !!localStorage.getItem('email');
  }

  isLogIn(){
    return !localStorage.getItem('email');
  }


}


