export class Property{
   //beds:number | undefined;
   // location:string | undefined;
   // max_guest:number | undefined;
   // price:number | undefined;
   // property_type:string | undefined;
   // ratings:Float32Array | undefined;
   // rooms:number | undefined;
   // property_id:number | undefined;
   // property_name:string | undefined;
   // room_size:Float32Array | undefined;
   // property_line_content:string | undefined;
   // more_info:string | undefined;

   constructor(
      public location:string,
      public property_type:string,
      public property_name:string,
      public property_line_content:string,
      public more_info:string,
      public address:string,
      public property_id?:number,
      public beds?:number,
      public max_guest?:number,
      public price?:number,
      public rooms?:number,
      public ratings?:Float32Array,
      public room_size?:Float32Array,
      ){}
}
