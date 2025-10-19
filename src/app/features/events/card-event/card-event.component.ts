import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  @Input() e!: Eventy;
  @Input() loading: boolean = false;

  @Input() searchValue: string;
@Output() notifLike:EventEmitter <Eventy> = new EventEmitter();//event perso
 LikeEvent(e:Eventy) :void{
  this.notifLike.emit(e);//nadiyou el emmiteur eli deja aamlnah ki nenzlou aal like
}
}
