import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { Eventy } from '../../../models/eventy';
import { feedback } from '../../../models/feedback';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  currentEvent: Eventy | null = null;
  feedbacks: feedback[] = [];
  eventId: number;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {

    this.eventId = +this.route.snapshot.params['id'];


    this.eventService.getEventById(this.eventId).subscribe((event: Eventy) => {
      this.currentEvent = event;
    });


    this.loadFeedbacks();
  }


  private loadFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe((allFeedbacks: feedback[]) => {
      this.feedbacks = allFeedbacks.filter(f => f.id_event === this.eventId);
      console.log('Feedbacks for event', this.eventId, this.feedbacks);
    });
  }


  onDeleteFeedback(feedbackId: number) {
    if (!confirm('Are you sure you want to delete this feedback?')) return;

    this.feedbackService.deleteFeedback(feedbackId).subscribe({
      next: () => {

        this.feedbacks = this.feedbacks.filter(f => f.id !== feedbackId);
        alert('Feedback deleted!');
      },
      error: (err) => {
        console.error(err);
        alert('Error deleting feedback');
      }
    });
  }


  onUpdateFeedback(f: feedback) {

    console.log('Update feedback clicked:', f);

  }
}
