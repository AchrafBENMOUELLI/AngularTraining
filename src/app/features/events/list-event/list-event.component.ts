/*import {Component, OnInit} from '@angular/core';
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
    */
   ///////////////////////////////////////////////
   import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../shared/data/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent implements OnInit {
  title: string;
  listEvents: Eventy[] = [];
  searchValue: string = '';

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.loadEvents();
  }

  /////////////////////////////////////////////////
  // Charger tous les événements
  /////////////////////////////////////////////////
  loadEvents() {
    this.eventService.getAllEvents().subscribe({
      next: (data: Eventy[]) => {
        this.listEvents = data;
        console.log('Events chargés:', data);
      },
      error: (err) => {
        console.error('Erreur lors du chargement:', err);
      }
    });
  }

  /////////////////////////////////////////////////
  // Supprimer un événement
  /////////////////////////////////////////////////
  delete(id: string) {  // ← string au lieu de number
    if (confirm("Voulez-vous vraiment supprimer cet événement ?")) {
      this.eventService.deleteEvent(id).subscribe({
        next: () => {
          // Retirer l'événement de la liste
          this.listEvents = this.listEvents.filter(e => e._id !== id);
          console.log('Événement supprimé');
        },
        error: (error) => {
          console.error("Erreur de suppression:", error);
        }
      });
    }
  }

  /////////////////////////////////////////////////
  // Incrémenter les likes
  /////////////////////////////////////////////////
  nbrLike(e: Eventy) {
    this.eventService.incrementLike(e._id!).subscribe({
      next: (updatedEvent: Eventy) => {
        // Mettre à jour l'événement dans la liste
        const index = this.listEvents.findIndex(event => event._id === e._id);
        if (index !== -1) {
          this.listEvents[index] = updatedEvent;
        }
        console.log('Like ajouté:', updatedEvent);
      },
      error: (err) => {
        console.error('Erreur lors du like:', err);
      }
    });
  }

  /////////////////////////////////////////////////
  // Décrémenter les likes (optionnel)
  /////////////////////////////////////////////////
  nbrUnlike(e: Eventy) {
    this.eventService.decrementLike(e._id!).subscribe({
      next: (updatedEvent: Eventy) => {
        const index = this.listEvents.findIndex(event => event._id === e._id);
        if (index !== -1) {
          this.listEvents[index] = updatedEvent;
        }
        console.log('Like retiré:', updatedEvent);
      },
      error: (err) => {
        console.error('Erreur lors du unlike:', err);
      }
    });
  }

  /////////////////////////////////////////////////
  // Recherche (à implémenter)
  /////////////////////////////////////////////////
  search() {
    // TODO: implémenter la recherche
  }
}
