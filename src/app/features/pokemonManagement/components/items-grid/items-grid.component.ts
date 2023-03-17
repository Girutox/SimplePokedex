import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent {
  buttonRole = ButtonRole;

  pokemon: Pokemon[] = [
    {
      id: 355,
      name: 'Ditto',
      image:
        'https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/thumbnail/1200x900/quality/100/pokemon_go_ditto_disguises_A16ilOs.png',
      attack: 50,
      defense: 50,
      hp: 35,
      type: 'Normal',
      idAuthor: 1,
    },
  ];
}
