import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PropertyComponent } from './property/property.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SearchComponent } from './search/search.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminmoreinfoComponent } from './adminmoreinfo/adminmoreinfo.component';
import { OrderSummeryComponent } from './order-summery/order-summery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { BookedhistoryComponent } from './bookedhistory/bookedhistory.component';
import { TypesearchComponent } from './typesearch/typesearch.component';
import { OwnerapprovalComponent } from './ownerapproval/ownerapproval.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    PropertyComponent,
    MoreinfoComponent,
    AdminloginComponent,
    SearchComponent,
    AdmindashboardComponent,
    AdminmoreinfoComponent,
    OrderSummeryComponent,
    PagenotfoundComponent,
    AddpropertyComponent,
    EditPropertyComponent,
    BookedhistoryComponent,
    TypesearchComponent,
    OwnerapprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
