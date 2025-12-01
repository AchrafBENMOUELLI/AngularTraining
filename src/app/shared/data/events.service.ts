/*import { Injectable } from '@angular/core';
import {Eventy} from '../../models/eventy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private urlBackend = "http://localhost:3000/events";

  constructor(private http: HttpClient) { }
   public getAllEvents(){
       //cnx backend
       return this.http.get<Eventy[]>(this.urlBackend);
  }

  public getEventById(id:number){
     //conditions
      return this.http.get<Eventy>(`${this.urlBackend}/${id}`);
      // ou tu peux faire ça : return this.http.get<Eventy>(this.urlBackend+"/"+id);
  }
  public addEvent (event:Eventy){
     return this.http.post<Eventy>(this.urlBackend,event);
  }
  public deleteEvent(id:number){
     return this.http.delete<Eventy>(`${this.urlBackend}/${id}`);
  }
  public updateEvent(event:Eventy){
     return this.http.put<Eventy>(`${this.urlBackend}/${event.id}`,event);
  }
  public getEventsByLocation(location:string){
     return this.http.get<Eventy[]>(`${this.urlBackend}?location=${location}`);
  }
}*/
/////////////////////////////////////////////////////////////////////////////////////
import { Injectable } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private urlBackend = "http://localhost:3000/event"; 

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<Eventy[]> {
    return this.http.get<Eventy[]>(this.urlBackend);
  }

  public getEventById(id: string): Observable<Eventy> {
    return this.http.get<Eventy>(`${this.urlBackend}/${id}`);
  }

  public addEvent(event: Eventy): Observable<Eventy> {
    return this.http.post<Eventy>(this.urlBackend, event);
  }

  public deleteEvent(id: string): Observable<Eventy> {
    return this.http.delete<Eventy>(`${this.urlBackend}/${id}`);
  }

  public updateEvent(id: string, event: Partial<Eventy>): Observable<Eventy> {
    return this.http.patch<Eventy>(`${this.urlBackend}/${id}`, event);
  }

  public getEventsByLocation(location: string): Observable<Eventy[]> {
    return this.http.get<Eventy[]>(`${this.urlBackend}/location/${location}`);
  }

  public getEventsByOrganizer(organizerId: number): Observable<Eventy[]> {
    return this.http.get<Eventy[]>(`${this.urlBackend}/organizer/${organizerId}`);
  }

  public getFeedbacksForEvent(id: string): Observable<Feedback[]> {  // ← Nouvelle méthode
    return this.http.get<Feedback[]>(`${this.urlBackend}/${id}/feedbacks`);
  }

  public incrementLike(id: string): Observable<Eventy> {  // ← Nouvelle méthode
    return this.http.patch<Eventy>(`${this.urlBackend}/${id}/like`, {});
  }

  public decrementLike(id: string): Observable<Eventy> {  // ← Nouvelle méthode
    return this.http.patch<Eventy>(`${this.urlBackend}/${id}/unlike`, {});
  }
}
