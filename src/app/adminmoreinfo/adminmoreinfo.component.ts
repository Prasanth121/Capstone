import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-adminmoreinfo',
  templateUrl: './adminmoreinfo.component.html',
  styleUrls: ['./adminmoreinfo.component.css']
})
export class AdminmoreinfoComponent implements OnInit {

  property:Property;
  constructor(private route:ActivatedRoute,private ps:PropertyService) { 
    this.property=new Property('','','','','','');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.ps.getSelectedPropertyId(parseInt(ids)).subscribe(data=>this.property=data);
    });
  }
}
