import { Injectable } from '@angular/core';
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
}
