import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  total_room:number=0;
  property:Property[];
  constructor(private ps:PropertyService,private router:Router) {
    this.property=[];
   }

  ngOnInit(): void {
    this.ps.getAll().subscribe(data=>{
      this.property=data;
      this.total_room=data.length;
      console.log(data);
    });
  }

  getMoreInfo(property:Property){
    this.router.navigate(['adminmoreinfo',property.property_id]);
  }

  deleteProperty(property:Property){
    console.log(property.property_name," - Property is deleting");
    this.ps.deleteProperty(property.property_id!).subscribe(r=>{r});
    alert("Property :"+property.property_name+" is Deleted.")
    window.location.reload();
  }

  edit(property:Property){
    this.router.navigate(['editproperty',property.property_id]);
  }
}
