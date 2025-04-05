import { Component } from '@angular/core';
import { CardService } from '../shared/services/card/card.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Info } from '../../interfaces/info/info';

@Component({
  selector: 'home',
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tcg: string;
  cardId: string;

  constructor(
    private cardService: CardService
  ) { 
    this.tcg = "";
    this.cardId = "";
  }


  public onSubmit(cardForm: NgForm): void {
    const payload: Info = cardForm.value;
    this.cardService.getCard(payload);
  }

}
