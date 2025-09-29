import { Component , OnInit} from '@angular/core';
import { Eventy } from '../../models/eventy';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  title:string;
  listEvents: Eventy[]
  searchValue:string;
////////////////////////////////////////////////////////////////////
  loading: boolean = true;
  skeletonArray = Array(8);
////////////////////////////////////////////////////////////////////
  constructor() {
    //les services
   // this.title="List of Events from Constructor";  a eviter!!
  }
  ngOnInit(): void {
    this.title="List of Events"; // this is the best practice !
    //cnx avec backend ici prochainenemnt!
    setTimeout(() => {
    this.listEvents=[
      {id:1, title:"Angular 15", decription:"Formation Angular 15", date:new Date("2025-06-15"), location:"Tunis", price:150, organizedId:1, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s", nbPlaces:20, nbrLike:0},
      {id:2, title:"ReactJS", decription:"Formation ReactJS", date:new Date("2025-07-01"), location:"Sousse", price:200, organizedId:2, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O9VF_gl5gExy_--7EGKP_0q3IyeAMI9VTg&s", nbPlaces:25, nbrLike:0},
      {id:3, title:"VueJS", decription:"Formation VueJS", date:new Date("2025-08-10"), location:"Ariana", price:180, organizedId:3, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eapJkQ2pPTn-h2uBiSnZ3f6rvHxmrvV7Bg&s", nbPlaces:0, nbrLike:0},
      {id:4, title:"NodeJS", decription:"Formation NodeJS", date:new Date("2025-09-05"), location:"Sfax", price:220, organizedId:4, imageUrl:"https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp", nbPlaces:15, nbrLike:0},
      {id:5, title:"Python", decription:"Formation Python", date:new Date("2025-10-20"), location:"Bizerte", price:160, organizedId:5, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2gA8MTrKMQHkvRs2l0lsv-JusvGsSgv31w&s", nbPlaces:0, nbrLike:0},
      {id:6, title:"Django", decription:"Formation Django", date:new Date("2025-11-15"), location:"Gabes", price:210, organizedId:6, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCqmotDRC2PdVgzemI0R5A19KaucTqRVmuQ&s", nbPlaces:22, nbrLike:0},
      {id:7, title:"Flask", decription:"Formation Flask", date:new Date("2025-12-01"), location:"Kairouan", price:190, organizedId:7, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflask-image&s", nbPlaces:28, nbrLike:0},
      {id:8, title:"Java Spring", decription:"Formation Java Spring", date:new Date("2026-01-10"), location:"Monastir", price:230, organizedId:8, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiPofrQkurj7j10ml8GAIQSQVgMH-trTTBw&s", nbPlaces:12, nbrLike:0},
      {id:9, title:"C# .NET", decription:"Formation C# .NET", date:new Date("2026-02-05"), location:"Hammamet", price:240, organizedId:9, imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png", nbPlaces:16, nbrLike:0},
      {id:10, title:"Ruby on Rails", decription:"Formation Ruby on Rails", date:new Date("2026-03-15"), location:"Mahdia", price:170, organizedId:10, imageUrl:"https://www.okoone.com/wp-content/uploads/2024/06/Ruby-on-rail-logo-1.png", nbPlaces:14, nbrLike:0},
      {id:11, title:"PHP Laravel", decription:"Formation PHP Laravel", date:new Date("2026-04-01"), location:"Zaghouan", price:155, organizedId:11, imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDISWFIUp0hbEmOKDGfJK1AI4dTsoUWoeGQ&s", nbPlaces:19, nbrLike:0}
    ];
    this.loading = false;
    }, 1000);
  }
  nbrPlaceDecr(e:Eventy) :void{
    if(e.nbPlaces>0){
      e.nbPlaces--;
    }
    }
  nbrLikeincr(e:Eventy) :void{
      e.nbrLike++;
    }
}
