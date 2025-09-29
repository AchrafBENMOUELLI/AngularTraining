import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePersonPipe } from './date-person.pipe';



@NgModule({
  declarations: [
    DatePersonPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
