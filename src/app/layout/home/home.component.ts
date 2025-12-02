import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../shared/data/events.service';
import {Eventy} from '../../models/eventy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  list:Eventy[]
   constructor(private service: EventsService) {
   }
   ngOnInit(): void {
    this.service.getAllEvents().subscribe(
      (events: Eventy[]) => {
        // Sort events by nblikes descending
        events.sort((a, b) => b.nbrLike - a.nbrLike);
        // Take the top 3
        this.list = events.slice(0, 3);
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }
}
