export class bookedPropertyList
{
   constructor( 
      public  user_name:string,
      public  user_email:string,
      public  user_phone:string,
      public  room_type:string,
      public  room_name:string,
      public  date_from:string,
      public  due_date:string,
      public  property_address:string,
      public  property_phone:string,
      public  property_email:string,
      public  no_of_nights?:number,
      public  no_of_rooms?:number,
      public  subtotal?:number,
      public  tax?:number,
      public  total?:number,
      public booked_id?:number){}
}