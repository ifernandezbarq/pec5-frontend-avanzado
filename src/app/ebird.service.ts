import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbirdService {

  private apiUrl = 'https://api.ebird.org/v2/data/obs/ES/recent';
  private apiKey = 'dg9uccmr3qth';

  constructor(private http: HttpClient) { }

  getBirds(): Observable<any[]> {
    const headers = new HttpHeaders().set('X-eBirdApiToken', this.apiKey);
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  getBirdById(speciesCode: string): Observable<any> {
    const headers = new HttpHeaders().set('X-eBirdApiToken', this.apiKey);
    return this.http.get<any>(`https://api.ebird.org/v2/ref/taxa/${speciesCode}`, { headers });
  }
}
