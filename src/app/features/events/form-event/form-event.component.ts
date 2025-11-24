import { Component } from '@angular/core';
import { EventsService } from '../../../shared/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css'] // ❗ fixed "styleUrl" → "styleUrls"
})
export class FormEventComponent {

  event: Eventy = new Eventy(); // ✅ instantiate correctly
  minDate: string = '';          // ✅ for [min] date input

  constructor(private dataService: EventsService) {
    // Set the minimum selectable date (today)
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  // ✅ Called when user clicks Submit
  save() {
    // Ensure all required fields are filled
    if (!this.event.title || !this.event.description || !this.event.date) {
      alert('Please fill all required fields.');
      return;
    }

    this.dataService.addEvent(this.event).subscribe({
      next: (res) => {
        alert('✅ Event added successfully!');
        this.event = new Eventy();// reset the form
      },
      error: (err) => {
        alert('❌ Error adding event');
        console.error(err);
      }
    });
  }
}
