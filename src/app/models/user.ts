export class User{
  id:number;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  adresse:{
    street:string;
    city:string;
    zipCode:string;
  }
  phones:string[];
}
