/*import { Component, OnInit } from '@angular/core';
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
}*/
/////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { Eventy } from '../../../models/eventy';
import { Feedback } from '../../../models/feedback';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  currentEvent: Eventy | null = null;
  feedbacks: Feedback[] = [];
  eventId: string = '';  // ← string au lieu de number

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    // Récupérer l'ID de l'événement depuis l'URL
    this.eventId = this.route.snapshot.params['id'];  // ← Pas de + devant

    // Charger l'événement
    this.loadEvent();

    // Charger les feedbacks
    this.loadFeedbacks();
  }

  /////////////////////////////////////////////////
  // Charger l'événement
  /////////////////////////////////////////////////
  private loadEvent() {
    this.eventService.getEventById(this.eventId).subscribe({
      next: (event: Eventy) => {
        this.currentEvent = event;
        console.log('Événement chargé:', event);
      },
      error: (err) => {
        console.error('Erreur chargement événement:', err);
      }
    });
  }

  /////////////////////////////////////////////////
  // Charger les feedbacks de cet événement
  /////////////////////////////////////////////////
  private loadFeedbacks() {
    // Utiliser la méthode du service qui récupère les feedbacks par événement
    this.feedbackService.getFeedbacksByEvent(this.eventId).subscribe({
      next: (feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks;
        console.log('Feedbacks chargés:', feedbacks);
      },
      error: (err) => {
        console.error('Erreur chargement feedbacks:', err);
      }
    });
  }

  /////////////////////////////////////////////////
  // Supprimer un feedback
  /////////////////////////////////////////////////
  onDeleteFeedback(feedbackId: string) {  // ← string au lieu de number
    if (!confirm('Voulez-vous vraiment supprimer ce feedback ?')) return;

    this.feedbackService.deleteFeedback(feedbackId).subscribe({
      next: () => {
        // Retirer le feedback de la liste
        this.feedbacks = this.feedbacks.filter(f => f._id !== feedbackId);
        alert('Feedback supprimé !');
        console.log('Feedback supprimé');
      },
      error: (err) => {
        console.error('Erreur suppression feedback:', err);
        alert('Erreur lors de la suppression');
      }
    });
  }

  /////////////////////////////////////////////////
  // Mettre à jour un feedback
  /////////////////////////////////////////////////
  onUpdateFeedback(f: Feedback) {
    // TODO: Ouvrir un modal ou un formulaire pour éditer
    console.log('Modifier feedback:', f);

    // Exemple de mise à jour (à adapter selon vos besoins)
    const updatedData = {
      content: f.content,
      rate: f.rate
    };

    this.feedbackService.updateFeedback(f._id!, updatedData).subscribe({
      next: (updatedFeedback: Feedback) => {
        // Mettre à jour le feedback dans la liste
        const index = this.feedbacks.findIndex(fb => fb._id === f._id);
        if (index !== -1) {
          this.feedbacks[index] = updatedFeedback;
        }
        alert('Feedback mis à jour !');
        console.log('Feedback mis à jour:', updatedFeedback);
      },
      error: (err) => {
        console.error('Erreur mise à jour feedback:', err);
        alert('Erreur lors de la mise à jour');
      }
    });
  }

  /////////////////////////////////////////////////
  // Incrémenter les likes de l'événement
  /////////////////////////////////////////////////
  incrementLike() {
    if (this.currentEvent && this.currentEvent._id) {
      this.eventService.incrementLike(this.currentEvent._id).subscribe({
        next: (updatedEvent: Eventy) => {
          this.currentEvent = updatedEvent;
          console.log('Like ajouté');
        },
        error: (err) => {
          console.error('Erreur like:', err);
        }
      });
    }
  }

  /////////////////////////////////////////////////
  // Décrémenter les likes de l'événement
  /////////////////////////////////////////////////
  decrementLike() {
    if (this.currentEvent && this.currentEvent._id && this.currentEvent.nbrLike > 0) {
      this.eventService.decrementLike(this.currentEvent._id).subscribe({
        next: (updatedEvent: Eventy) => {
          this.currentEvent = updatedEvent;
          console.log('Like retiré');
        },
        error: (err) => {
          console.error('Erreur unlike:', err);
        }
      });
    }
  }
}
