/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedback } from '../../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  //step0 : import HttpClientModule in app.module.ts
  //step1: define the backend url
  urlbackend='http://localhost:3000/feedback';

  //step2: inject HttpClient via constructor
  constructor(private httpClient:HttpClient) {

}
//step3: create the entity model:feedback in this case
  public createFeedback(feedback:feedback){
      return this.httpClient.post<feedback>(this.urlbackend,feedback);
   }
   public getAllFeedbacks(){
      return this.httpClient.get<feedback[]>(this.urlbackend);
   }
   public deleteFeedback(id: number) {
  return this.httpClient.delete<void>(`${this.urlbackend}/${id.toString()}`);
}

   public updateFeedback(feedback:feedback){
      return this.httpClient.put<feedback>(`${this.urlbackend}/${feedback.id}`,feedback);
   }
}*/
//////////////////////////////////////////////////////////////////////////////////////////////
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private urlBackend = 'http://localhost:3000/feedback';

  constructor(private httpClient: HttpClient) {}

  public createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(this.urlBackend, feedback);
  }

  public getAllFeedbacks(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(this.urlBackend);
  }

  public getFeedbackById(id: string): Observable<Feedback> {  // ← string au lieu de number
    return this.httpClient.get<Feedback>(`${this.urlBackend}/${id}`);
  }

  public deleteFeedback(id: string): Observable<Feedback> {  // ← string au lieu de number
    return this.httpClient.delete<Feedback>(`${this.urlBackend}/${id}`);
  }

  public updateFeedback(id: string, feedback: Partial<Feedback>): Observable<Feedback> {  // ← PATCH
    return this.httpClient.patch<Feedback>(`${this.urlBackend}/${id}`, feedback);
  }

  public getFeedbacksByUser(id_user: number): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.urlBackend}/user/${id_user}`);
  }

  public getFeedbacksByEvent(id_event: string): Observable<Feedback[]> {  // ← string
    return this.httpClient.get<Feedback[]>(`${this.urlBackend}/event/${id_event}`);
  }
}
