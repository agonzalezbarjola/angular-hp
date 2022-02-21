import { Component, OnInit } from '@angular/core';
import { CharactersInterface } from './models/Model';
import { CharactersService } from './service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public characters: CharactersInterface[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      const apiResults: CharactersInterface[] = data;

      const formattedCharacters = apiResults.map(
        ({ id, name, img, age, gender, house }) => ({
          id,
          name,
          img,
          age,
          gender,
          house,
        })
      );
      this.characters = formattedCharacters
    });
  }
}
