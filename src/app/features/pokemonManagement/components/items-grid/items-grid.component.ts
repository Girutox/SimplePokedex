import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { PokemonService } from '../../services/pokemon.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  @Output() idEmitter = new EventEmitter<number>();

  buttonRole = ButtonRole;

  pokemon: Pokemon[] = [];
  loading = false;
  errorMessage = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  onEdit(id: number): void {
    this.idEmitter.emit(id);
  }

  onDelete(id: number): void {
    if (confirm('¿Desea eliminar el registro seleccionado?')) {
      this.deletePokemonById(id);
    }
  }

  fetchPokemons(): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemon = [];
    this.pokemonService
      .fetchPokemons({ idAuthor: environment.idAuthor })
      .subscribe({
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

  deletePokemonById(id: number): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemon = [];
    this.pokemonService.deletePokemonById(id).subscribe({
      next: data => {
        this.loading = false;

        this.fetchPokemons();
      },
      error: error => {
        this.loading = false;

        if (error.status === 400) {
          this.errorMessage = 'petición errónea de la información';
        } else if (error.status === 404) {
          this.errorMessage =
            'no se pudo encontrar el registro para ser eliminado';
        } else {
          this.errorMessage = 'desconocido';
        }
      },
    });
  }
}
