import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('/rest-api/teams/');
  }

  get(teamName) {
    return this.http.get('/rest-api/teams/' + teamName);
  }
}
