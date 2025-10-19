import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent {
  //read the url //service hadha esmou ActivatedRoute
  //get the data from url=>id
  //fetch listevent by id
  currentEvent:Eventy;
  constructor(private route: ActivatedRoute , private data: EventsService) {

  }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']-1; //-1 5ater listeh bda mn 0 w id bda mn 1
    //fetch event by id
    this.currentEvent= this.data.getEventById(id);
  }
}
