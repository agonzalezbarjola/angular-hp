import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public charactersURL: string =
    'https://angular-hp-server2-fersz1t5s-agonzalezbarjola.vercel.app/api/characters';

  constructor(private httpClient: HttpClient) {}

  public getAllCharacters() {
    return this.httpClient.get(this.charactersURL);
  }
}
