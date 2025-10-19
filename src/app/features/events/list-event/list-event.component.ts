import { Component , OnInit} from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../shared/data/events.service';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  title:string;
  listEvents: Eventy[]
  searchValue:string;
//////////////////////////////Skeletonscreen//////////////////////////////////////
  loading: boolean = true;
  skeletonArray = Array(3);
  ////////////////////////Pagination//////////////////////////////////////////
  currentPage = 1;
  itemsPerPage = 3;
////////////////////////////////////////////////////////////////////
  constructor(private data: EventsService) { //injecter instance mel service
    //les services
   // this.title="List of Events from Constructor";  a eviter!!
  }
  ngOnInit(): void {
    //cnx avec backend ici prochainenemnt!
    this.title="List of Events"; // this is the best practice !
    this.listEvents=this.data.getAllEvents();// nadinaha lena 
    setTimeout(() => {
    this.listEvents=[...this.listEvents];// 3 dots are called spread operator /Clones the array to trigger UI update// idha estakhdamthach ma ybadilch l'affichage khater byemchi fibalou eli matbadel chy!
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
  /////////////////////////////////////////////////////////////
    get paginatedEvents()
    {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.listEvents.slice(startIndex, endIndex);
    }

    get totalPages() {
      return Math.ceil(this.listEvents.length / this.itemsPerPage);
    }

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }

//////////////////////////////////////////////////////////////

}
