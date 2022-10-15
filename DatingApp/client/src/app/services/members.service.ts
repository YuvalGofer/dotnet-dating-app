import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'app/models/member';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user') as string)?.token
  })
}

@Injectable({
    providedIn: 'root',
  })
export class MembersService {
  baseurl = environment.apiurl;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseurl}users`, httpOptions);
  }
  getMember(username: string): Observable<Member> {
    return this.http.get<Member>(`${this.baseurl}users/${username}`, httpOptions);
  }
}
