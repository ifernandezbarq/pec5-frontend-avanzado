import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getImageById(id: string): Observable<any> {
    return this.http.get<any>(`https://picsum.photos/id/${id}/info`);
  }
}