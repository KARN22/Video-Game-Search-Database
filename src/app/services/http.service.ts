import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../model';
import { environment } from 'src/environments/environment';
import { GameDetails } from '../game-model';
import { GameTrailers } from '../game-trailers-model';
import { GameScreenshots } from '../game-screenshots-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<Games> {
    let params = new HttpParams().set('ordering', ordering)
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search)
    }
    return this.http.get<Games>(`${environment.BASE_URL}/games`, { params: params })
  }

  getGameDetails(id: string): Observable<GameDetails> {
    return this.http.get<GameDetails>(`${environment.BASE_URL}/games/${id}`)
  }

  getGameTrailers(id: string): Observable<GameTrailers> {
    return this.http.get<GameTrailers>(`${environment.BASE_URL}/games/${id}/movies`)
  }

  getGameScreenshots(id: string): Observable<GameScreenshots> {
    return this.http.get<GameScreenshots>(`${environment.BASE_URL}/games/${id}/screenshots`)
  }
}
