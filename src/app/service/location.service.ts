import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  getAllPost():Observable<Location[]>{
    return this.http.get<Location[]>("https://rickandmortyapi.com/api/location");
  }

  getLocationsByType(type: string): Observable<Location[]> {
    return this.http.get<{ results: Location[] }>(this.apiUrl).pipe(
      map(response => response.results.filter(location => location.type === type))
    );
  }
}
