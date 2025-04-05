import { inject, Injectable } from '@angular/core';
import { Info } from '../../../../interfaces/info/info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private http = inject(HttpClient)

  constructor( ) { }

  public async getCard(payload: Info): Promise<void> {
    this.http.get<void>(`https://apitcg.com/api/${payload.tcg}/cards/${payload.cardId}`)
      .subscribe(card => {
        console.log(card)
      }
    )
  }
}
