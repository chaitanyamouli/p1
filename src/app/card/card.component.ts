import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private routes:Router){}
onclick(){
   this.routes.navigateByUrl('card1')
}
onclick1(){
  this.routes.navigateByUrl('card2')
}
onclick2(){
  this.routes.navigateByUrl('card3')
}
}
