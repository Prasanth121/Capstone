import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {

  property:Property;
  constructor(private route:ActivatedRoute,private ps:PropertyService,private router:Router) { 
    this.property = new Property('','','','','','');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let ids:string=<string>params.get('id');
      this.ps.getSelectedPropertyId(parseInt(ids)).subscribe(data=>this.property=data);
    });
  }

  Updatepropertydata(){
    console.log(this.ps.updateProperty(this.property).subscribe(r=>{r}));
    alert("Property Updated");
    this.router.navigate(['ownerdashboard']);
  }
}
