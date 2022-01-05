import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookedPropertyList } from '../model/bookedPropertyList';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.css']
})
export class OrderSummeryComponent implements OnInit {

  email:any |null=localStorage.getItem('email');
  booked:bookedPropertyList;
  constructor(private ps:PropertyService,private route:ActivatedRoute) {
    this.booked=new bookedPropertyList('','','','','','','','','','');
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.ps.getSelectedBookedId(parseInt(ids)).subscribe(data=>this.booked=data);
    });
  }

}
