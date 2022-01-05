import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  property:Property[] | undefined;
  location:string |undefined;
  total_count:any;
  constructor(private router:Router,private ps:PropertyService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
    let locatin:string=<string>params.get('id');
    this.ps.getSelectedPropertyLocation(locatin).subscribe(data=>{
      this.property=data;
      this.total_count=data.length;
      console.log(data);
      
    });
    });
}

  getMoreInfo(property:Property){
    this.router.navigate(['moreinfo',property.property_id,property.price]);
  }
}
