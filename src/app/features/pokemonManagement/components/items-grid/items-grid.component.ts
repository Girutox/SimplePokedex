import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  buttonRole = ButtonRole;

  pokemon: Pokemon[] = [];
  loading = false;
  errorMessage = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemon = [];
    this.pokemonService.fetchPokemons({ idAuthor: 1 }).subscribe({
      next: data => {
        this.pokemon = data;
        this.loading = false;
      },
      error: error => {
        this.loading = false;

        if (error.status === 400) {
          this.errorMessage = 'petición errónea de la información';
        } else if (error.status === 404) {
          this.errorMessage =
            'no se ha provisto el "IdAuthor" para la búsqueda de información';
        } else {
          this.errorMessage = 'desconocido';
        }
      },
    });
  }
}
