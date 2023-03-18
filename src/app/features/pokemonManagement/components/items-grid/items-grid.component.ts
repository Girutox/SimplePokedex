import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { PokemonService } from '../../services/pokemon.service';
import { catchError, finalize, Observable, ObservableInput } from 'rxjs';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  buttonRole = ButtonRole;

  pokemon: Pokemon[] = [];
  loading = false;
  error = false;
  errorMessage = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.error = false;
    this.errorMessage = '';
    this.loading = true;

    this.pokemon = [];
    this.pokemonService
      .fetchPokemons()
      .pipe(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        catchError((err): ObservableInput<any> => {
          this.error = true;
          this.errorMessage = err.message;
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(response => {
        this.pokemon = response;
      });
  }
}
