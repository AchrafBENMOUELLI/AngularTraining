/*import { Component } from '@angular/core';
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
  */
 ///////////////////////////////////////////////////////////////////////////
 import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {
  event: Eventy = {
    title: '',
    description: '',
    date: new Date(),
    location: '',
    price: 0,
    organizerId: 1,  // TODO: Récupérer l'ID de l'utilisateur connecté
    imageUrl: '',
    nbPlaces: 0,
    nbrLike: 0
  };

  minDate: string = '';

  constructor(
    private dataService: EventsService,
    private router: Router
  ) {
    // Date minimum = aujourd'hui
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  /////////////////////////////////////////////////
  // Sauvegarder l'événement
  /////////////////////////////////////////////////
  save() {
    // Validation des champs requis
    if (!this.event.title || !this.event.description || !this.event.date) {
      alert('⚠️ Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!this.event.location) {
      alert('⚠️ Veuillez indiquer un lieu.');
      return;
    }

    if (this.event.price < 0) {
      alert('⚠️ Le prix ne peut pas être négatif.');
      return;
    }

    if (this.event.nbPlaces <= 0) {
      alert('⚠️ Le nombre de places doit être supérieur à 0.');
      return;
    }

    // Validation de l'URL de l'image (optionnel)
    if (this.event.imageUrl && !this.isValidUrl(this.event.imageUrl)) {
      alert('⚠️ L\'URL de l\'image n\'est pas valide.');
      return;
    }

    console.log('Événement à créer:', this.event);

    this.dataService.addEvent(this.event).subscribe({
      next: (res) => {
        console.log('Événement créé:', res);
        alert('✅ Événement ajouté avec succès !');

        // Rediriger vers la liste des événements
        this.router.navigate(['/events']);
      },
      error: (err) => {
        console.error('Erreur lors de la création:', err);

        // Afficher l'erreur de validation du backend
        if (err.error && err.error.message) {
          alert(`❌ Erreur: ${err.error.message}`);
        } else {
          alert('❌ Erreur lors de l\'ajout de l\'événement');
        }
      }
    });
  }

  /////////////////////////////////////////////////
  // Valider une URL
  /////////////////////////////////////////////////
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /////////////////////////////////////////////////
  // Annuler et retourner à la liste
  /////////////////////////////////////////////////
  cancel() {
    if (confirm('Êtes-vous sûr de vouloir annuler ? Les données non sauvegardées seront perdues.')) {
      this.router.navigate(['/events']);
    }
  }

  /////////////////////////////////////////////////
  // Réinitialiser le formulaire
  /////////////////////////////////////////////////
  reset() {
    this.event = {
      title: '',
      description: '',
      date: new Date(),
      location: '',
      price: 0,
      organizerId: 1,
      imageUrl: '',
      nbPlaces: 0,
      nbrLike: 0
    };
  }
}
