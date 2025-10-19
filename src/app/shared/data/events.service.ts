import { Injectable } from '@angular/core';
import { Eventy } from '../../models/eventy';

@Injectable({ //annotation maanetha enu el instance tsan3et deja doub matetlansa el application 'root' khater maktoub
  providedIn: 'root'
})
export class EventsService {

    private list: Eventy[]=[
    {id:1, title:"Angular 15", description:"Formation Angular 15", date:new Date("2025-06-15"), location:"Tunis", price:150, organizedId:1, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s", nbPlaces:20, nbrLike:0},
      {id:2, title:"ReactJS", description:"Formation ReactJS", date:new Date("2025-07-01"), location:"Sousse", price:200, organizedId:2, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O9VF_gl5gExy_--7EGKP_0q3IyeAMI9VTg&s", nbPlaces:25, nbrLike:0},
      {id:3, title:"VueJS", description:"Formation VueJS", date:new Date("2025-08-10"), location:"Ariana", price:180, organizedId:3, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eapJkQ2pPTn-h2uBiSnZ3f6rvHxmrvV7Bg&s", nbPlaces:0, nbrLike:0},
      {id:4, title:"NodeJS", description:"Formation NodeJS", date:new Date("2025-09-05"), location:"Sfax", price:220, organizedId:4, imageUrl:"https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp", nbPlaces:15, nbrLike:0},
      {id:5, title:"Python", description:"Formation Python", date:new Date("2025-10-20"), location:"Bizerte", price:160, organizedId:5, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2gA8MTrKMQHkvRs2l0lsv-JusvGsSgv31w&s", nbPlaces:0, nbrLike:0},
      {id:6, title:"Django", description:"Formation Django", date:new Date("2025-11-15"), location:"Gabes", price:210, organizedId:6, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCqmotDRC2PdVgzemI0R5A19KaucTqRVmuQ&s", nbPlaces:22, nbrLike:0},
      {id:7, title:"Flask", description:"Formation Flask", date:new Date("2025-12-01"), location:"Kairouan", price:190, organizedId:7, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflask-image&s", nbPlaces:28, nbrLike:0},
      {id:8, title:"Java Spring", description:"Formation Java Spring", date:new Date("2026-01-10"), location:"Monastir", price:230, organizedId:8, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiPofrQkurj7j10ml8GAIQSQVgMH-trTTBw&s", nbPlaces:12, nbrLike:0},
      {id:9, title:"C# .NET", description:"Formation C# .NET", date:new Date("2026-02-05"), location:"Hammamet", price:240, organizedId:9, imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png", nbPlaces:16, nbrLike:0},
      {id:10, title:"Ruby on Rails", description:"Formation Ruby on Rails", date:new Date("2026-03-15"), location:"Mahdia", price:170, organizedId:10, imageUrl:"https://www.okoone.com/wp-content/uploads/2024/06/Ruby-on-rail-logo-1.png", nbPlaces:14, nbrLike:0},
      {id:11, title:"PHP Laravel", description:"Formation PHP Laravel", date:new Date("2026-04-01"), location:"Zaghouan", price:155, organizedId:11, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDISWFIUp0hbEmOKDGfJK1AI4dTsoUWoeGQ&s", nbPlaces:19, nbrLike:0}
    ]
  constructor() { }
    public getAllEvents(): Eventy[]{
      //cnx backend
      return this.list;
    }
    //ekhdem pipe
    public getEventById(id:number):Eventy
    {
      return this.list[id];
    }
}
