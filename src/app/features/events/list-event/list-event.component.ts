import {Component, OnInit} from '@angular/core';
import {Eventy} from '../../../models/eventy';
import {EventsService} from '../../../shared/data/events.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',

})
export class ListEventComponent implements OnInit {
    //attributes =>  var , values
  title:string;
  //title="hello" => we can do this :/ but its not a best practice
  listEvents:Eventy[];
  searchValue:string;
  constructor(private eventService:EventsService) {
  }
  //methods => action
  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (data:Eventy[])=>{
        this.listEvents=data;
      }
      );
  }


  /////////////////////////////////////////////////
  delete(id: number) {
  if (confirm("Are you sure you want to delete this event?")) {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        // remove the deleted event from the list
        this.listEvents = this.listEvents.filter(e => e.id !== id);
      },
      error => {
        console.error("Delete error:", error);
      }
    );
  }
}
  /////////////////////////////////////////////////
//method to buy ticket => click on the button buy ticket

  search(){}

  nbrLike(e:Eventy){
      e.nbrLike ++
      this.eventService.updateEvent(e).subscribe();
    }

}
