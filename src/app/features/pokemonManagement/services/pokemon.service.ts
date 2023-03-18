import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  // public isLoading$ = new BehaviorSubject<boolean>(false);
  public erros$ = new BehaviorSubject<string | null>(null);

  fetchPokemons(): Observable<any> {
    // this.isLoading$.next(true);
    this.erros$.next(null);
    return this.http
      .get(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/?idAuthor=1'
      )
      .pipe(
        catchError(err => {
          this.erros$.next(err);
          return of([]);
        })
        // finalize(() => this.isLoading$.next(false))
      );
  }
}
