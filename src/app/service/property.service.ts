import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BookPropertyData } from '../model/bookedproperty';
import { bookedPropertyList } from '../model/bookedPropertyList';
import { Message } from '../model/messages';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url: string = 'http://localhost:8080/';
  constructor(private router: Router, private http: HttpClient) { }

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url + 'getRooms');
  }

  getbookedAll():Observable<bookedPropertyList[]>{
    return this.http.get<bookedPropertyList[]>(this.url+'getBookedData');
  }

  getSelectedPropertyId(id:number): Observable<Property>{
    return this.http.post<Property>(this.url+'propertyid',id);
  }

  getSelectedPropertyLocation(location:string): Observable<Property[]>{
    return this.http.post<Property[]>(this.url+'prerpertyLocation',location);
  }

  getSelectedPropertyType(type:string): Observable<Property[]>{
    return this.http.post<Property[]>(this.url+'prerpertyType',type);
  }

  bookedData(id:number,email:string,bookeddata:BookPropertyData): Observable<bookedPropertyList> {
    console.log(id,"--",email,"----","datas00 - ",bookeddata);
    console.log(this.url + 'bookProperty/'+id+'/'+email);
    return this.http.post<bookedPropertyList>(this.url + 'bookProperty/'+email+'/'+id, bookeddata);
  }

  getSelectedBookedId(id:number): Observable<bookedPropertyList>{
    return this.http.post<bookedPropertyList>(this.url+'bookedPropertyId',id);
  }

  addProperty(addproperty: Property): Observable<Property> {
    console.log("**** - ",addproperty);
    return this.http.post<Property>(this.url +'addproperty', addproperty);
  }

  deleteProperty(id:number){
    console.log("---",id);
    return this.http.delete(this.url+'deleteProperty/'+id);
  }

  updateProperty(property:Property){
    return this.http.post(this.url+'editProperty',property);
  }

  getPropertyStatusPendingAll(): Observable<bookedPropertyList[]>{
    return this.http.get<bookedPropertyList[]>(this.url+'prorpertyStatusPendingAll');
  }
  getPropertyStatusApprove(id:number): Observable<bookedPropertyList[]>{
    return this.http.post<bookedPropertyList[]>(this.url+'prorpertyStatusApproval',id);
  }
}
