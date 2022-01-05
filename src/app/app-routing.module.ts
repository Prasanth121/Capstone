import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminmoreinfoComponent } from './adminmoreinfo/adminmoreinfo.component';
import { BookedhistoryComponent } from './bookedhistory/bookedhistory.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { OwnerapprovalComponent } from './ownerapproval/ownerapproval.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TypesearchComponent } from './typesearch/typesearch.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'room',component:PropertyComponent},
  {path:'moreinfo/:id/:price',component:MoreinfoComponent},
  {path:'adminmoreinfo/:id',component:AdminmoreinfoComponent},
  {path:'search/:id',component:SearchComponent},
  {path:'typesearch/:id',component:TypesearchComponent},  
  {path:'ownerdashboard',component:AdmindashboardComponent},
  {path:'ordersummery/:id',component:OrderSummeryComponent},  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'nodatafound',component:PagenotfoundComponent},
  {path:'addproperty',component:AddpropertyComponent},
  {path:'editproperty/:id',component:EditPropertyComponent},
  {path:'bookedhistory',component:BookedhistoryComponent},
  {path:'ownerapproval',component:OwnerapprovalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
