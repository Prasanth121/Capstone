import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookedPropertyList } from '../model/bookedPropertyList';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-bookedhistory',
  templateUrl: './bookedhistory.component.html',
  styleUrls: ['./bookedhistory.component.css']
})
export class BookedhistoryComponent implements OnInit {

  
  constructor(private ps:PropertyService,private router:Router) { }

  property:bookedPropertyList[] | undefined;
  ngOnInit(): void {
    this.ps.getbookedAll().subscribe(data=>{
      this.property=data;
      console.log(data);
    });
  }

}
