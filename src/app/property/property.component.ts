import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,private ps:PropertyService,private router:Router) { }

  property:Property[] | undefined;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.ps.getAll().subscribe(data=>{
      this.property=data;
      console.log(data);
    });
  }

  getMoreInfo(property:Property){
    this.router.navigate(['moreinfo',property.property_id,property.price]);
  }

  getlocation(idsm:string){
    this.router.navigate(['search',idsm,]);
  }
}
