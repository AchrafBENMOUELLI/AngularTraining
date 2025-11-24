import { HttpClient } from '@angular/common/http';
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
}
