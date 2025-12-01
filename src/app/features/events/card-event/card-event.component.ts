/*import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Eventy} from '../../../models/eventy';
import { EventsService } from '../../../shared/data/events.service';


@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  constructor(private eventService: EventsService) {}

  searchValue: string;
  @Input() e:Eventy;
  @Output() notificationLike:EventEmitter<Eventy>
    = new EventEmitter();
   nbrPlaceDecr(e:Eventy){
    e.nbPlaces --
    this.eventService.updateEvent(e).subscribe();
  }
  nbrLike(e:Eventy){
    e.nbrLike ++
    this.eventService.updateEvent(e).subscribe();
  }
}*/
////////////////////////////////////////////////////////////////////////////
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../shared/data/events.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  @Input() e!: Eventy;
  @Output() notificationLike: EventEmitter<Eventy> = new EventEmitter();

  searchValue: string = '';

  constructor(private eventService: EventsService) {}

  /////////////////////////////////////////////////
  // Décrémenter les places disponibles
  /////////////////////////////////////////////////
  nbrPlaceDecr(e: Eventy) {
    if (e.nbPlaces > 0) {
      const updatedData = { nbPlaces: e.nbPlaces - 1 };

      this.eventService.updateEvent(e._id!, updatedData).subscribe({
        next: (updatedEvent: Eventy) => {
          e.nbPlaces = updatedEvent.nbPlaces;
          console.log('Places mises à jour:', updatedEvent);
        },
        error: (err) => {
          console.error('Erreur mise à jour places:', err);
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
        e.nbrLike = updatedEvent.nbrLike;
        this.notificationLike.emit(updatedEvent);
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
    if (e.nbrLike > 0) {
      this.eventService.decrementLike(e._id!).subscribe({
        next: (updatedEvent: Eventy) => {
          e.nbrLike = updatedEvent.nbrLike;
          console.log('Like retiré:', updatedEvent);
        },
        error: (err) => {
          console.error('Erreur lors du unlike:', err);
        }
      });
    }
  }
}
