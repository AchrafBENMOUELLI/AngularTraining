import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { FormComponent } from '../../feedback/form/form.component';

const routes: Routes = [{ path: '', component: FeedbackComponent,children:[
  { path: 'event/:eventId', component: FormComponent }

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
