import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Pokemon, PokemonFetch } from '../models/pokemon';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  fetchPokemons(payload: PokemonFetch): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(`${environment.apiBaseUrl}?idAuthor=${payload.idAuthor}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }
}
