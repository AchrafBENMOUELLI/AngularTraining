import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { feedback } from '../../../models/feedback';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  feedback: feedback = {
    id: 0,         // will generate random on submit
    id_user: 1,    // always 1
    id_event: 0,   // set from URL
    content: '',
    rate: 0,
    date: new Date() // today
  };

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const eventId = +this.route.snapshot.paramMap.get('eventId')!; // fetch event ID from URL
    this.feedback.id_event = eventId; // set it once
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.feedback.id = this.generateRandomId(); // random ID on submit

      this.feedbackService.createFeedback(this.feedback).subscribe({
        next: () => {
          alert('Feedback submitted!');
          form.resetForm();
          this.feedback.content = '';
          this.feedback.rate = 0;
          this.feedback.date = new Date(); // reset date to today
        },
        error: (err) => {
          console.error(err);
          alert('Error submitting feedback');
        }
      });
    }
  }

  deleteFeedback() {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(this.feedback.id).subscribe({
        next: () => {
          alert('Feedback deleted!');
          this.feedback.id = 0;
          this.feedback.content = '';
          this.feedback.rate = 0;
          this.feedback.date = new Date();
        },
        error: (err) => {
          console.error(err);
          alert('Error deleting feedback');
        }
      });
    }
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000); // random ID
  }

  get todayString(): string {
    return this.feedback.date.toISOString().split('T')[0];
  }
}
