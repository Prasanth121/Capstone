import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  property:Property;
  constructor(private ps:PropertyService, private router: Router) { 
    this.property = new Property('','','','','','',0);
  }

  ngOnInit(): void {
  }

  addpropertydata(){
    let that = this;
    console.log(this.property);
    this.ps.addProperty(this.property).subscribe(res=>{console.log(res)});
    this.router.navigate(['ownerdashboard']);
  }

}
