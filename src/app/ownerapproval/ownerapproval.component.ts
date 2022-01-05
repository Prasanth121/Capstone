import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookedPropertyList } from '../model/bookedPropertyList';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-ownerapproval',
  templateUrl: './ownerapproval.component.html',
  styleUrls: ['./ownerapproval.component.css']
})
export class OwnerapprovalComponent implements OnInit {

  constructor(private ps:PropertyService,private router:Router) { }

  property:bookedPropertyList[] | undefined;
  ngOnInit(): void {
    this.ps.getPropertyStatusPendingAll().subscribe(data=>{
      this.property=data;
      console.log(data);
    });
  }

  approve(property:bookedPropertyList){
    this.ps.getPropertyStatusApprove(property.booked_id!).subscribe(res=>{window.location.reload()});
  }
}
